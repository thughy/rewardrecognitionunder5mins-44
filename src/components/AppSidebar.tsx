
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Award, 
  BarChart, 
  Building,
  Clipboard,
  Flag, 
  Gift, 
  Home, 
  MessageSquarePlus, 
  Settings, 
  Zap,
  Briefcase,
  UserPlus,
  Clock,
  GraduationCap,
  HeartPulse,
  Handshake
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const mainNavItems = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Feed',
    url: '/feed',
    icon: Zap,
  },
  {
    title: 'Recognize',
    url: '/recognize',
    icon: MessageSquarePlus,
  },
  {
    title: 'Rewards',
    url: '/rewards',
    icon: Gift,
  },
  {
    title: 'Leaderboard',
    url: '/leaderboard',
    icon: Award,
  },
  {
    title: 'Surveys',
    url: '/surveys',
    icon: Clipboard,
  },
  {
    title: 'Employer Branding',
    url: '/employer-branding',
    icon: Briefcase,
    highlight: true,
  },
];

// New Opportunities section
const opportunitiesNavItems = [
  {
    title: 'Referral Program',
    url: '/opportunities/referrals',
    icon: UserPlus,
    highlight: true,
  },
  {
    title: 'Shift Incentives',
    url: '/opportunities/shifts',
    icon: Clock,
  },
  {
    title: 'Learning & Development',
    url: '/opportunities/learning',
    icon: GraduationCap,
  },
  {
    title: 'Wellness Challenges',
    url: '/opportunities/wellness',
    icon: HeartPulse,
  },
  {
    title: 'Volunteering',
    url: '/opportunities/volunteering',
    icon: Handshake,
  },
];

const adminNavItems = [
  {
    title: 'Analytics',
    url: '/admin/analytics',
    icon: BarChart,
  },
  {
    title: 'Settings',
    url: '/admin/settings',
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();
  
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-beekeeper-yellow flex items-center justify-center">
            <span className="text-beekeeper-black font-bold">P</span>
          </div>
          <h1 className="text-lg font-bold">Pato's Holding Corp.</h1>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      location.pathname === item.url && "bg-accent text-accent-foreground",
                      item.highlight && "relative overflow-visible after:absolute after:top-1 after:right-1 after:h-2 after:w-2 after:rounded-full after:bg-blue-500 after:animate-pulse"
                    )}
                  >
                    <Link to={item.url}>
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* New Opportunities Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-1">
            <Award size={16} className="text-bucketlist-blue" />
            <span>Opportunities</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {opportunitiesNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      location.pathname === item.url && "bg-accent text-accent-foreground",
                      item.highlight && "relative overflow-visible after:absolute after:top-1 after:right-1 after:h-2 after:w-2 after:rounded-full after:bg-green-500 after:animate-pulse"
                    )}
                  >
                    <Link to={item.url}>
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Admin</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      location.pathname === item.url && "bg-accent text-accent-foreground"
                    )}
                  >
                    <Link to={item.url}>
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <div className="p-4">
          <Button className="w-full bg-bucketlist-blue hover:bg-bucketlist-indigo">
            <Gift className="mr-2 h-4 w-4" />
            Redeem Points
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
