import { Bell, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  return (
    <header className="glass border-b border-border/30 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Dashboard Overview</h2>
          <p className="text-muted-foreground">Welcome back! Here's what's happening.</p>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-destructive text-xs">
              3
            </Badge>
          </Button>

          {/* User Profile */}
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth cursor-pointer">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>TC</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium">Thiago Carlos</p>
              <p className="text-muted-foreground text-xs">Admin</p>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};