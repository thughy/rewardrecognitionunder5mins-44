import React, { useState } from 'react';
import { Bell, Menu, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

// Sample notification data
const notifications = [
  {
    id: 1,
    title: 'New Recognition',
    description: 'Alex recognized you for your teamwork!',
    time: '10 minutes ago',
    read: false
  },
  {
    id: 2,
    title: 'Points Added',
    description: 'You received 25 points for completing a project.',
    time: '2 hours ago',
    read: false
  },
  {
    id: 3,
    title: 'Upcoming Anniversary',
    description: 'Your 2-year work anniversary is next week.',
    time: '1 day ago',
    read: true
  },
  {
    id: 4, 
    title: 'Reward Reminder',
    description: 'Don\'t forget to redeem your points before they expire!',
    time: '3 days ago',
    read: true
  }
];

// Sample employee data that would come from an API in a real application
const sampleEmployees = [
  { id: 1, name: 'Emily Chen', avatar: '/placeholder.svg', initials: 'EC' },
  { id: 2, name: 'John Smith', avatar: '/placeholder.svg', initials: 'JS' },
  { id: 3, name: 'Maria Rodriguez', avatar: '/placeholder.svg', initials: 'MR' },
  { id: 4, name: 'David Wilson', avatar: '/placeholder.svg', initials: 'DW' },
  { id: 5, name: 'Sarah Kim', avatar: '/placeholder.svg', initials: 'SK' },
  { id: 6, name: 'Robert Johnson', avatar: '/placeholder.svg', initials: 'RJ' },
  { id: 7, name: 'Jennifer Lee', avatar: '/placeholder.svg', initials: 'JL' },
  { id: 8, name: 'Michael Brown', avatar: '/placeholder.svg', initials: 'MB' },
];

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  // Filter employees based on search input
  const filteredEmployees = searchQuery.trim() === '' 
    ? sampleEmployees 
    : sampleEmployees.filter(emp => 
        emp.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <header className="border-b bg-background sticky top-0 z-30">
      <div className="container flex h-16 items-center px-4">
        <div className="lg:hidden mr-2">
          <SidebarTrigger>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SidebarTrigger>
        </div>
        
        <div className="flex items-center gap-2 mr-4">
          <div className="hidden md:block text-lg font-semibold">
            Bucketlist Rewards
          </div>
          <Badge variant="outline" className="bg-bucketlist-lightBlue text-bucketlist-blue">
            <span className="font-medium">450</span>
            <span className="ml-1 text-xs">points</span>
          </Badge>
        </div>
        
        <div className="flex-1 flex items-center">
          <div className="relative w-full max-w-sm hidden md:flex">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search colleagues..."
              className="pl-8 focus-visible:ring-bucketlist-blue"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => {
                // Delay hiding the dropdown to allow for clicking on options
                setTimeout(() => setIsSearchFocused(false), 200);
              }}
            />
            {isSearchFocused && (
              <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md border p-2 z-10 max-h-[300px] overflow-y-auto mt-1">
                {filteredEmployees.length > 0 ? (
                  filteredEmployees.map((employee) => (
                    <div 
                      key={employee.id}
                      className="flex items-center gap-2 p-2 hover:bg-muted rounded cursor-pointer"
                      onClick={() => {
                        setSearchQuery(employee.name);
                        setIsSearchFocused(false);
                      }}
                    >
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={employee.avatar} alt={employee.name} />
                        <AvatarFallback>{employee.initials}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{employee.name}</span>
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-center text-sm text-muted-foreground">
                    No colleagues found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notifications.some(n => !n.read) && (
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-bucketlist-blue animate-ping"></span>
                )}
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="end">
              <DropdownMenuLabel className="flex justify-between items-center">
                <span>Notifications</span>
                <Badge variant="outline" className="text-xs">
                  {notifications.filter(n => !n.read).length} new
                </Badge>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {notifications.length > 0 ? (
                <>
                  {notifications.map((notification) => (
                    <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-3 cursor-pointer">
                      <div className="flex w-full justify-between">
                        <span className="font-medium">{notification.title}</span>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{notification.description}</span>
                      {!notification.read && (
                        <div className="h-2 w-2 rounded-full bg-bucketlist-blue mt-1"></div>
                      )}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="justify-center font-medium text-bucketlist-blue">
                    View all notifications
                  </DropdownMenuItem>
                </>
              ) : (
                <div className="py-6 text-center">
                  <p className="text-sm text-muted-foreground">No notifications yet</p>
                </div>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8 border border-gray-200">
                  <AvatarImage src="/lovable-uploads/fed439f3-6d57-4068-af61-3f0562732bd4.png" alt="John Doe" />
                  <AvatarFallback className="bg-beekeeper-yellow text-beekeeper-black">JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
