import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { KPICard } from "@/components/dashboard/KPICard";
import { ChartCard } from "@/components/Dashboard/ChartCard";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Eye,
  Activity,
  Target
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const kpiData = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    subtitle: "Last 30 days",
    trend: {
      value: 20.1,
      isPositive: true,
    }
  },
  {
    title: "Active Users",
    value: "2,350",
    subtitle: "Current month",
    trend: {
      value: 180.1,
      isPositive: true,
    }
  },
  {
    title: "Conversion Rate",
    value: "12.5%",
    subtitle: "All campaigns",
    trend: {
      value: 19,
      isPositive: true,
    }
  },
  {
    title: "Page Views",
    value: "89,400",
    subtitle: "This month",
    trend: {
      value: -0.3,
      isPositive: false,
    }
  }
];

const chartData = [
  { name: "Jan", value: 400, users: 240 },
  { name: "Feb", value: 300, users: 456 },
  { name: "Mar", value: 600, users: 789 },
  { name: "Apr", value: 800, users: 567 },
  { name: "May", value: 700, users: 890 },
  { name: "Jun", value: 900, users: 1200 },
];

const pieData = [
  { name: "Desktop", value: 35, color: "hsl(var(--primary))" },
  { name: "Mobile", value: 45, color: "hsl(var(--secondary))" },
  { name: "Tablet", value: 20, color: "hsl(var(--accent))" },
];

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-surface">
      <DashboardHeader />
      
      <main className="p-6 space-y-8">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiData.map((kpi, index) => (
            <KPICard 
              key={kpi.title}
              {...kpi}
              className="animate-fade-in"
            />
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="Revenue Trend" className="animate-fade-in">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--primary))" 
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="User Growth" className="animate-fade-in">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ChartCard title="Monthly Performance" className="lg:col-span-2 animate-fade-in">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Device Usage" className="animate-fade-in">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </main>
    </div>
  );
};