import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { progressService } from '../../services/progressService';
import { Loader, Activity, Users, Timer, Award, RefreshCw } from 'lucide-react';
import { cn } from '../../utils/cn';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  CartesianGrid
} from 'recharts';

const getModelInfo = (log: any) => {
  if (log.model) {
    const provider = log.provider || (log.model.startsWith('kira') ? 'kira' : log.model.startsWith('qwen') || log.model.includes('gpt-oss') ? 'groq' : 'gemini');
    return {
      model: log.model,
      provider,
      providerLabel: provider === 'kira' ? 'Kira AI' : provider === 'groq' ? 'Groq AI' : 'Google Gemini'
    };
  }
  // Default for older logs
  if (log.type === 'diagnose' || log.type === 'consolidate' || log.type === 'rewrite' || log.type === 'summary') {
    return { model: 'gemini-1.5-flash', provider: 'gemini', providerLabel: 'Google Gemini' };
  }
  return { model: 'gemini-1.5-flash (cũ)', provider: 'gemini', providerLabel: 'Google Gemini' };
};

export const TeacherAiStatistics: React.FC = () => {
  const [logs, setLogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLogs = useCallback(async () => {
    setIsLoading(true);
    const data = await progressService.getAiUsageLogs(200);
    setLogs(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  // Calculations
  const metrics = useMemo(() => {
    const totalCalls = logs.length;
    let totalPrompt = 0;
    let totalCandidates = 0;
    let totalAll = 0;

    logs.forEach(log => {
      totalPrompt += log.promptTokens || 0;
      totalCandidates += log.candidatesTokens || 0;
      totalAll += log.totalTokens || 0;
    });

    const avgTokens = totalCalls > 0 ? Math.round(totalAll / totalCalls) : 0;
    
    // Cost estimation based on Gemini 3.1 Flash Lite
    // Prompt: $0.075 / 1M tokens
    // Completion: $0.30 / 1M tokens
    const rateInput = 0.075 / 1000000;
    const rateOutput = 0.30 / 1000000;
    const usdToVnd = 25400;
    const costUSD = (totalPrompt * rateInput) + (totalCandidates * rateOutput);
    const costVND = Math.round(costUSD * usdToVnd);

    return {
      totalCalls,
      totalPrompt,
      totalCandidates,
      totalAll,
      costVND,
      avgTokens
    };
  }, [logs]);

  // 1. Daily usage data (ComposedChart)
  const dailyData = useMemo(() => {
    const groups: Record<string, { date: string; inputTokens: number; outputTokens: number; calls: number }> = {};
    
    // Sort logs ascending by date first to group them chronologically
    const sortedLogs = [...logs].sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

    sortedLogs.forEach(log => {
      if (!log.timestamp) return;
      const date = log.timestamp.substring(5, 10); // MM-DD format
      if (!groups[date]) {
        groups[date] = { date, inputTokens: 0, outputTokens: 0, calls: 0 };
      }
      groups[date].inputTokens += log.promptTokens || 0;
      groups[date].outputTokens += log.candidatesTokens || 0;
      groups[date].calls += 1;
    });

    return Object.values(groups);
  }, [logs]);

  // 2. Task Breakdown (PieChart)
  const taskData = useMemo(() => {
    const typeMapNames: Record<string, string> = {
      "tutor": "Gia sư AI (Tutor)",
      "rewrite": "Viết lại câu (Rewrite)",
      "summary": "Tóm tắt (Summary)",
      "diagnose": "Chẩn đoán (Diagnose)",
      "consolidate": "Tinh gọn bộ nhớ",
      "proof_grading": "Chấm tự luận"
    };

    const counts: Record<string, number> = {};
    logs.forEach(log => {
      const type = log.type || "tutor";
      counts[type] = (counts[type] || 0) + 1;
    });

    return Object.entries(counts).map(([type, value]) => ({
      name: typeMapNames[type] || type,
      value
    }));
  }, [logs]);

  // 3. Top Users (Horizontal BarChart)
  const topUsersData = useMemo(() => {
    const users: Record<string, number> = {};
    logs.forEach(log => {
      if (!log.email) return;
      users[log.email] = (users[log.email] || 0) + (log.totalTokens || 0);
    });

    return Object.entries(users)
      .map(([email, totalTokens]) => ({ email, totalTokens }))
      .sort((a, b) => b.totalTokens - a.totalTokens)
      .slice(0, 5);
  }, [logs]);

  // 4. Model Breakdown (PieChart)
  const modelData = useMemo(() => {
    const counts: Record<string, number> = {};
    logs.forEach(log => {
      const info = getModelInfo(log);
      counts[info.model] = (counts[info.model] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [logs]);

  const typeMapBadgeColors: Record<string, string> = {
    "tutor": "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400",
    "rewrite": "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400",
    "summary": "bg-slate-100 text-slate-700 dark:bg-slate-900/40 dark:text-slate-400",
    "diagnose": "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400",
    "consolidate": "bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400",
    "proof_grading": "bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400"
  };

  const typeMapNames: Record<string, string> = {
    "tutor": "Gia sư AI (Tutor)",
    "rewrite": "Viết lại câu",
    "summary": "Tóm tắt",
    "diagnose": "Chẩn đoán",
    "consolidate": "Tinh gọn bộ nhớ",
    "proof_grading": "Chấm tự luận"
  };

  const COLORS = ['#F59E0B', '#8B5CF6', '#10B981', '#3B82F6', '#EF4444', '#EC4899'];

  if (isLoading) {
    return (
      <div className="h-64 flex flex-col items-center justify-center gap-4 bg-card border border-border/45 rounded-2xl shadow-sm">
        <Loader size={36} className="animate-spin text-emerald-600" />
        <p className="text-xs font-bold text-muted-foreground animate-pulse">Đang tải báo cáo thống kê AI...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 4 Cards ở trên cùng */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="border-border/50 bg-card shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
              <Activity size={20} />
            </div>
            <div>
              <p className="text-[8px] font-bold text-muted-foreground uppercase leading-none mb-1">Tổng lượt gọi AI</p>
              <h4 className="text-sm font-black text-foreground">{metrics.totalCalls.toLocaleString()}</h4>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
              <Users size={20} />
            </div>
            <div>
              <p className="text-[8px] font-bold text-muted-foreground uppercase leading-none mb-1">Tổng token gọi</p>
              <h4 className="text-sm font-black text-foreground">{metrics.totalAll.toLocaleString()}</h4>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
              <Timer size={20} />
            </div>
            <div>
              <p className="text-[8px] font-bold text-muted-foreground uppercase leading-none mb-1">Token tb / Request</p>
              <h4 className="text-sm font-black text-foreground">{metrics.avgTokens.toLocaleString()}</h4>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
              <Award size={20} />
            </div>
            <div>
              <p className="text-[8px] font-bold text-muted-foreground uppercase leading-none mb-1">Ước tính chi phí</p>
              <h4 className="text-sm font-black text-foreground">{metrics.costVND.toLocaleString()} VNĐ</h4>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 2 Biểu đồ hàng 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Biểu đồ xu hướng */}
        <Card className="border-border/50 bg-card shadow-sm">
          <CardHeader className="p-4 border-b border-border/20">
            <CardTitle className="text-foreground text-xs font-black">📈 Xu hướng Token & Lượt gọi hàng ngày</CardTitle>
          </CardHeader>
          <CardContent className="p-4 h-64">
            {dailyData.length === 0 ? (
              <div className="h-full flex items-center justify-center text-xs text-muted-foreground">Không có dữ liệu thời gian này.</div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={dailyData} margin={{ top: 10, right: 5, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="date" tick={{ fontSize: 9 }} />
                  <YAxis yAxisId="left" tick={{ fontSize: 9 }} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 9 }} />
                  <ChartTooltip contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', fontSize: '10px' }} />
                  <ChartLegend wrapperStyle={{ fontSize: '10px' }} />
                  <Bar yAxisId="left" dataKey="inputTokens" stackId="tokens" fill="#10B981" name="Input Tokens" />
                  <Bar yAxisId="left" dataKey="outputTokens" stackId="tokens" fill="#3B82F6" name="Output Tokens" />
                  <Line yAxisId="right" type="monotone" dataKey="calls" stroke="#F59E0B" strokeWidth={2} name="Lượt gọi" dot={{ r: 3 }} />
                </ComposedChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        {/* Biểu đồ phân bổ tác vụ */}
        <Card className="border-border/50 bg-card shadow-sm">
          <CardHeader className="p-4 border-b border-border/20">
            <CardTitle className="text-foreground text-xs font-black">🍕 Phân bổ lượng gọi theo Tác vụ</CardTitle>
          </CardHeader>
          <CardContent className="p-4 flex flex-col sm:flex-row items-center justify-center gap-6">
            {taskData.length === 0 ? (
              <div className="h-64 flex items-center justify-center text-xs text-muted-foreground">Không có dữ liệu.</div>
            ) : (
              <>
                <div className="w-40 h-40 shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={taskData}
                        innerRadius={50}
                        outerRadius={70}
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {taskData.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <ChartTooltip contentStyle={{ fontSize: '10px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex-1 space-y-1.5 w-full">
                  {taskData.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-[10px] font-semibold text-foreground/80">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }} />
                        <span>{item.name}</span>
                      </div>
                      <span className="font-bold text-muted-foreground">{item.value} lần ({Math.round(item.value / metrics.totalCalls * 100)}%)</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Hàng 2: Top người dùng & Phân bổ Model & Bảng nhật ký */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cột trái: Top 5 Users & Phân bổ Model xếp chồng dọc */}
        <div className="space-y-6 lg:col-span-1">
          {/* Top 5 Users */}
          <Card className="border-border/50 bg-card shadow-sm">
            <CardHeader className="p-4 border-b border-border/20">
              <CardTitle className="text-foreground text-xs font-black">🏆 Top 5 Học sinh dùng AI nhiều nhất</CardTitle>
            </CardHeader>
            <CardContent className="p-4 h-48">
              {topUsersData.length === 0 ? (
                <div className="h-full flex items-center justify-center text-xs text-muted-foreground">Chưa ghi nhận lượt dùng nào.</div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart layout="vertical" data={topUsersData} margin={{ top: 10, right: 5, left: -20, bottom: 5 }}>
                    <XAxis type="number" tick={{ fontSize: 9 }} />
                    <YAxis dataKey="email" type="category" tick={{ fontSize: 8 }} width={60} />
                    <ChartTooltip contentStyle={{ fontSize: '10px' }} />
                    <Bar dataKey="totalTokens" fill="#8B5CF6" radius={[0, 4, 4, 0]} name="Tokens" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>

          {/* Phân bổ theo dòng Model */}
          <Card className="border-border/50 bg-card shadow-sm">
            <CardHeader className="p-4 border-b border-border/20">
              <CardTitle className="text-foreground text-xs font-black">🤖 Phân bổ cuộc gọi theo Dòng Model</CardTitle>
            </CardHeader>
            <CardContent className="p-4 flex flex-col items-center justify-center gap-4">
              {modelData.length === 0 ? (
                <div className="h-28 flex items-center justify-center text-xs text-muted-foreground">Không có dữ liệu.</div>
              ) : (
                <>
                  <div className="w-24 h-24 shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={modelData}
                          innerRadius={30}
                          outerRadius={45}
                          paddingAngle={3}
                          dataKey="value"
                        >
                          {modelData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[(index + 3) % COLORS.length]} />
                          ))}
                        </Pie>
                        <ChartTooltip contentStyle={{ fontSize: '10px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-1 w-full max-h-24 overflow-y-auto pr-1">
                    {modelData.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-[9px] font-semibold text-foreground/80">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[(idx + 3) % COLORS.length] }} />
                          <span className="truncate max-w-[120px]" title={item.name}>{item.name}</span>
                        </div>
                        <span className="font-bold text-muted-foreground">{item.value} lần ({Math.round(item.value / metrics.totalCalls * 100)}%)</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Cột phải: Bảng nhật ký */}
        <Card className="border-border/50 bg-card shadow-sm lg:col-span-2">
          <CardHeader className="p-4 border-b border-border/20 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-foreground text-xs font-black">📜 Nhật ký 10 lượt gọi gần nhất</CardTitle>
            <Button
              onClick={fetchLogs}
              variant="ghost"
              size="sm"
              className="h-6 text-[9px] font-extrabold gap-1 border border-border/60 hover:bg-secondary cursor-pointer"
            >
              <RefreshCw size={10} /> Làm mới
            </Button>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full text-[10px] text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/50 dark:bg-slate-900/40 border-b border-border/40 text-muted-foreground font-black uppercase text-[8px]">
                  <th className="p-3">Thời gian</th>
                  <th className="p-3">Tài khoản</th>
                  <th className="p-3">Tác vụ</th>
                  <th className="p-3">Mô hình</th>
                  <th className="p-3 text-right">Tokens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20 font-semibold text-foreground/80">
                {logs.slice(0, 10).map((log, idx) => {
                  const localTime = log.timestamp
                    ? new Date(log.timestamp).toLocaleString('vi-VN', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                      })
                    : 'N/A';
                  const modelInfo = getModelInfo(log);
                  return (
                    <tr key={idx} className="hover:bg-slate-50/20 dark:hover:bg-slate-900/10">
                      <td className="p-3 whitespace-nowrap text-muted-foreground font-mono">{localTime}</td>
                      <td className="p-3 max-w-[100px] truncate" title={log.email}>{log.email || 'guest'}</td>
                      <td className="p-3">
                        <span className={cn("px-2 py-0.5 rounded text-[8px] font-bold inline-block", typeMapBadgeColors[log.type] || "bg-slate-100 text-slate-700")}>
                          {typeMapNames[log.type] || log.type || 'Tutor'}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className={cn("px-2 py-0.5 rounded text-[8px] font-bold inline-block", 
                          modelInfo.provider === 'kira' 
                            ? "bg-amber-500/10 text-amber-600 border border-amber-500/20 animate-pulse" 
                            : modelInfo.provider === 'groq'
                            ? "bg-indigo-500/10 text-indigo-600 border border-indigo-500/20"
                            : "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
                        )}>
                          {modelInfo.model}
                        </span>
                      </td>
                      <td className="p-3 text-right font-mono font-bold text-foreground">
                        {log.totalTokens ? log.totalTokens.toLocaleString() : 0}
                      </td>
                    </tr>
                  );
                })}
                {logs.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-muted-foreground italic">Không có bản ghi nhật ký nào.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
