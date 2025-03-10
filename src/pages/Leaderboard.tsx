
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Medal, Trophy, Award } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const leaders = [
    { id: 1, name: 'Sarah Kim', department: 'Marketing', points: 1250, avatarFallback: 'SK' },
    { id: 2, name: 'John Reynolds', department: 'Sales', points: 1120, avatarFallback: 'JR' },
    { id: 3, name: 'Emily Chen', department: 'Engineering', points: 980, avatarFallback: 'EC' },
    { id: 4, name: 'David Wilson', department: 'Customer Support', points: 840, avatarFallback: 'DW' },
    { id: 5, name: 'Maria Garcia', department: 'HR', points: 780, avatarFallback: 'MG' },
    { id: 6, name: 'James Taylor', department: 'Operations', points: 750, avatarFallback: 'JT' },
    { id: 7, name: 'Lisa Brown', department: 'Engineering', points: 720, avatarFallback: 'LB' },
    { id: 8, name: 'Robert Lee', department: 'Finance', points: 650, avatarFallback: 'RL' },
    { id: 9, name: 'Jennifer Lopez', department: 'Marketing', points: 630, avatarFallback: 'JL' },
    { id: 10, name: 'Michael Scott', department: 'Sales', points: 590, avatarFallback: 'MS' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Leaderboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-beekeeper-light border-beekeeper-yellow">
          <CardHeader className="pb-2 text-center">
            <div className="mx-auto">
              <Medal className="h-8 w-8 text-bucketlist-blue" />
            </div>
            <CardTitle className="text-lg">Your Rank</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold">#14</p>
            <p className="text-sm text-muted-foreground">Out of 87 employees</p>
          </CardContent>
        </Card>
        
        <Card className="bg-beekeeper-light border-beekeeper-yellow">
          <CardHeader className="pb-2 text-center">
            <div className="mx-auto">
              <Trophy className="h-8 w-8 text-bucketlist-blue" />
            </div>
            <CardTitle className="text-lg">Your Points</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold">450</p>
            <p className="text-sm text-muted-foreground">This quarter</p>
          </CardContent>
        </Card>
        
        <Card className="bg-beekeeper-light border-beekeeper-yellow">
          <CardHeader className="pb-2 text-center">
            <div className="mx-auto">
              <Award className="h-8 w-8 text-bucketlist-blue" />
            </div>
            <CardTitle className="text-lg">Department Rank</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold">#3</p>
            <p className="text-sm text-muted-foreground">In Engineering</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Top Performers</CardTitle>
          <CardDescription>
            Colleagues with the most recognition points
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="company">
            <TabsList className="mb-4">
              <TabsTrigger value="company">Company</TabsTrigger>
              <TabsTrigger value="department">Department</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
            
            <TabsContent value="company">
              <div className="space-y-4">
                {leaders.map((leader, index) => (
                  <div 
                    key={leader.id} 
                    className={`flex items-center p-3 rounded-lg ${index < 3 ? 'bg-bucketlist-lightBlue' : 'bg-muted/50'}`}
                  >
                    <div className="font-bold text-lg w-8 text-center mr-3">
                      {index + 1}
                    </div>
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="/placeholder.svg" alt={leader.name} />
                      <AvatarFallback>{leader.avatarFallback}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">{leader.name}</div>
                      <div className="text-sm text-muted-foreground">{leader.department}</div>
                    </div>
                    <div className="font-bold text-bucketlist-blue">{leader.points} pts</div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="department">
              <div className="text-center py-8 text-muted-foreground">
                <p>Select your department to view rankings</p>
              </div>
            </TabsContent>
            
            <TabsContent value="monthly">
              <div className="text-center py-8 text-muted-foreground">
                <p>Monthly leaderboard resets on the 1st of each month</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaderboard;
