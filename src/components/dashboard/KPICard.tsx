import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  onClick?: () => void;
}

export const KPICard = ({ title, value, subtitle, trend, className, onClick }: KPICardProps) => {
  return (
    <Card
      className={cn(
        "bg-gradient-surface border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 p-6",
        onClick && "cursor-pointer hover:bg-muted/50",
        className
      )}
      onClick={onClick}
    >
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>

          {trend && (
            <div className={cn(
              "flex items-center space-x-1 text-sm font-medium",
              trend.isPositive ? "text-success" : "text-destructive"
            )}>
              {trend.isPositive ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span>{Math.round(Math.abs(trend.value))}%</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};