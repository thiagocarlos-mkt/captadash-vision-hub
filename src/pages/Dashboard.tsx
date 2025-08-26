import { StatCard } from "@/components/Dashboard/StatCard";
import { ChartCard } from "@/components/Dashboard/ChartCard";
import { Sidebar } from "@/components/Dashboard/Sidebar";
import { Header } from "@/components/Dashboard/Header";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Eye,
  Activity,
  Target
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import heroImage from "@/assets/dashboard-hero.jpg";

const statsData = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    changeType: "positive" as const,
    icon: DollarSign
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+180.1%", 
    changeType: "positive" as const,
    icon: Users
  },
  {
    title: "Conversion Rate",
    value: "12.5%",
    change: "+19%",
    changeType: "positive" as const,
    icon: TrendingUp
  },
  {
    title: "Page Views",
    value: "89,400",
    change: "-0.3%",
    changeType: "negative" as const,
    icon: Eye
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
    <div className="flex h-screen bg-gradient-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Hero Section */}
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src={heroImage} 
              alt="Dashboard Analytics" 
              className="w-full h-48 object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-primary/20 flex items-center justify-center">
              <div className="text-center space-y-2">
                <h1 className="text-4xl font-bold">Analytics Dashboard</h1>
                <p className="text-lg text-muted-foreground">Real-time insights and performance metrics</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <StatCard 
                key={stat.title}
                {...stat}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard title="Revenue Trend" className="animate-slide-up">
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

            <ChartCard title="User Growth" className="animate-slide-up">
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
                    stroke="hsl(var(--secondary))" 
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--secondary))", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ChartCard title="Monthly Performance" className="lg:col-span-2 animate-slide-up">
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

            <ChartCard title="Device Usage" className="animate-slide-up">
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
    </div>
  );
};