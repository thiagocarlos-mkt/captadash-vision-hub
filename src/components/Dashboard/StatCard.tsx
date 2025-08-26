import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  className?: string;
  style?: CSSProperties;
}

export const StatCard = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon,
  className,
  style
}: StatCardProps) => {
  const changeColor = {
    positive: "text-success",
    negative: "text-destructive", 
    neutral: "text-muted-foreground"
  }[changeType];

  return (
    <Card 
      className={cn(
        "glass p-6 hover:shadow-elevated transition-smooth group",
        className
      )}
      style={style}
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold tracking-tight">{value}</p>
        </div>
        <div className="rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-smooth">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className={cn("text-sm font-medium", changeColor)}>
          {change}
        </span>
        <span className="text-sm text-muted-foreground">vs last month</span>
      </div>
    </Card>
  );
};