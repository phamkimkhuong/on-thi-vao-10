import { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, AlertTriangle, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  isChunkError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    isChunkError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    const isChunkError =
      error.name === 'ChunkLoadError' ||
      error.message?.includes('Failed to fetch dynamically imported module') ||
      error.message?.includes('Importing a module script failed');

    return {
      hasError: true,
      error,
      isChunkError
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught Error Boundary Catch:', error, errorInfo);

    // Nếu là lỗi chunk do mới deploy bản mới, tự động reload trang 1 lần
    if (this.state.isChunkError) {
      const hasReloaded = sessionStorage.getItem('chunk_reload_retry');
      if (!hasReloaded) {
        sessionStorage.setItem('chunk_reload_retry', 'true');
        window.location.reload();
      }
    }
  }

  private handleReload = () => {
    sessionStorage.removeItem('chunk_reload_retry');
    window.location.reload();
  };

  private handleGoHome = () => {
    sessionStorage.removeItem('chunk_reload_retry');
    window.location.href = '/dashboard';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mb-4 border border-amber-500/20 animate-bounce">
            <AlertTriangle size={32} />
          </div>
          <h2 className="text-2xl font-black text-foreground mb-2">
            {this.state.isChunkError ? 'Đã Có Phiên Bản Mới!' : 'Có Lỗi Xảy Ra Khởi Tạo Giao Diện'}
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mb-6 leading-relaxed">
            {this.state.isChunkError
              ? 'Hệ thống vừa cập nhật phiên bản mới. Vui lòng tải lại trang để nạp dữ liệu cập nhật tốt nhất.'
              : 'Đã xảy ra sự cố ngoài ý muốn. Đừng lo lắng, dữ liệu học tập của bạn luôn được bảo toàn.'}
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={this.handleReload}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <RefreshCw size={14} /> Tải Lại Trang
            </button>
            <button
              onClick={this.handleGoHome}
              className="px-5 py-2.5 bg-secondary hover:bg-secondary/80 text-foreground font-bold text-xs rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Home size={14} /> Về Trang Chủ
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
