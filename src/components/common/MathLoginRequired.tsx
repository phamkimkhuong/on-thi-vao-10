import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LockKeyhole, LogIn, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { cn } from '../../utils/cn';

interface MathLoginRequiredProps {
  title?: string;
  description?: string;
  className?: string;
}

export const MathLoginRequired: React.FC<MathLoginRequiredProps> = ({
  title = 'Cần đăng nhập để học Toán',
  description = 'Các bài Toán yêu cầu lưu ảnh bài giải, lịch sử làm bài và tiến độ cá nhân nên bạn cần đăng nhập trước khi luyện tập.',
  className
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const returnTo = `${location.pathname}${location.search}${location.hash}`;

  return (
    <div className={cn('max-w-xl mx-auto py-8', className)}>
      <Card className="border-indigo-500/10 shadow-md">
        <CardContent className="p-6 md:p-8 text-center space-y-5">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-primary flex items-center justify-center">
            <LockKeyhole size={28} />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-black text-foreground tracking-tight">{title}</h2>
            <p className="text-xs font-semibold text-muted-foreground leading-relaxed max-w-md mx-auto">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button
              onClick={() => navigate('/auth', { state: { returnTo } })}
              className="font-bold text-xs"
            >
              <LogIn size={14} /> Đăng nhập để tiếp tục
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/dashboard')}
              className="font-bold text-xs border border-border/50"
            >
              <ArrowLeft size={14} /> Về bảng điều khiển
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MathLoginRequired;
