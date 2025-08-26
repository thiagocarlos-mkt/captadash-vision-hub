import { 
  BarChart3, 
  Users, 
  Settings, 
  PieChart, 
  TrendingUp,
  Home,
  Bell,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";

const sidebarItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: BarChart3, label: "Analytics" },
  { icon: PieChart, label: "Reports" },
  { icon: TrendingUp, label: "Growth" },
  { icon: Users, label: "Users" },
  { icon: Bell, label: "Notifications" },
  { icon: Settings, label: "Settings" },
];

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="glass w-64 h-screen p-4 border-r border-border/30">
      <div className="space-y-6">
        {/* Logo */}
        <div className="px-2">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            CaptaDash
          </h1>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search..." 
            className="pl-10 bg-muted/30 border-border/50 focus:border-primary/50"
          />
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <Button
              key={item.label}
              variant={activeItem === item.label ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 transition-smooth",
                activeItem === item.label 
                  ? "bg-primary text-primary-foreground shadow-glow-primary" 
                  : "hover:bg-muted/50"
              )}
              onClick={() => setActiveItem(item.label)}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
};