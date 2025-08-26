import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const ChartCard = ({ title, children, className }: ChartCardProps) => {
  return (
    <Card className={`glass ${className}`}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        {children}
      </CardContent>
    </Card>
  );
};