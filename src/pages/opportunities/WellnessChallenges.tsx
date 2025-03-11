
import React, { useState } from 'react';
import { HeartPulse, Footprints, Droplets, Brain, Users, Medal, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import OpportunityPageHeader from '@/components/opportunities/OpportunityPageHeader';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

// Mock data for active challenges
const mockActiveChallenges = [
  {
    id: 1,
    title: 'Step Master Challenge',
    description: 'Complete 10,000 steps daily for a week',
    startDate: '2023-10-25',
    endDate: '2023-11-01',
    type: 'individual',
    goal: 70000,
    current: 45000,
    points: 500,
    category: 'activity',
    icon: Footprints
  },
  {
    id: 2,
    title: 'Hydration Nation',
    description: 'Drink 8 glasses of water daily for 10 days',
    startDate: '2023-10-20',
    endDate: '2023-10-30',
    type: 'team',
    goal: 80,
    current: 65,
    points: 400,
    category: 'hydration',
    icon: Droplets,
    teamMembers: 5,
    teamName: 'Marketing Team'
  },
  {
    id: 3,
    title: 'Mindfulness Minutes',
    description: 'Complete 10 minutes of meditation daily',
    startDate: '2023-10-28',
    endDate: '2023-11-11',
    type: 'individual',
    goal: 140,
    current: 20,
    points: 600,
    category: 'mental',
    icon: Brain
  }
];

// Mock data for upcoming challenges
const mockUpcomingChallenges = [
  {
    id: 4,
    title: 'Winter Wellness Challenge',
    description: 'Complete various winter health activities',
    startDate: '2023-11-15',
    endDate: '2023-12-15',
    type: 'team',
    points: 1000,
    category: 'seasonal',
    icon: HeartPulse
  },
  {
    id: 5,
    title: 'Sleep Quality Quest',
    description: 'Improve your sleep patterns for better health',
    startDate: '2023-11-10',
    endDate: '2023-11-24',
    type: 'individual',
    points: 500,
    category: 'rest',
    icon: Brain
  }
];

// Mock data for leaderboard
const mockLeaderboard = [
  { id: 1, name: 'Emma Roberts', points: 2450, team: 'Marketing' },
  { id: 2, name: 'James Chen', points: 2100, team: 'Engineering' },
  { id: 3, name: 'Sophia Kim', points: 1850, team: 'Customer Success' },
  { id: 4, name: 'Marcus Johnson', points: 1700, team: 'Sales' },
  { id: 5, name: 'Olivia Martinez', points: 1550, team: 'HR' },
];

const WellnessChallenges = () => {
  const { toast } = useToast();
  const [showJoinDialog, setShowJoinDialog] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState<any>(null);
  
  const handleJoinChallenge = (challenge: any) => {
    setSelectedChallenge(challenge);
    setShowJoinDialog(true);
  };
  
  const confirmJoinChallenge = () => {
    setShowJoinDialog(false);
    toast({
      title: "Challenge Joined",
      description: `You've successfully joined the ${selectedChallenge?.title} challenge.`,
    });
  };
  
  const getCategoryBadge = (category: string) => {
    switch(category) {
      case 'activity':
        return <Badge className="bg-green-500">Activity</Badge>;
      case 'hydration':
        return <Badge className="bg-blue-500">Hydration</Badge>;
      case 'mental':
        return <Badge className="bg-purple-500">Mental Health</Badge>;
      case 'seasonal':
        return <Badge className="bg-orange-500">Seasonal</Badge>;
      case 'rest':
        return <Badge className="bg-indigo-500">Rest & Recovery</Badge>;
      default:
        return null;
    }
  };
  
  const getTypeBadge = (type: string) => {
    switch(type) {
      case 'individual':
        return <Badge variant="outline">Individual</Badge>;
      case 'team':
        return <Badge variant="outline" className="border-bucketlist-indigo text-bucketlist-indigo">Team</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <OpportunityPageHeader
        title="Wellness Challenges"
        description="Compete in health challenges to earn rewards while improving your wellbeing"
        icon={HeartPulse}
        ctaText="Join a Challenge"
        onCtaClick={() => document.getElementById('challenges')?.scrollIntoView({ behavior: 'smooth' })}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card id="challenges">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Active Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {mockActiveChallenges.map(challenge => (
                  <div key={challenge.id} className="border rounded-lg overflow-hidden">
                    <div className="p-4 flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div className={`p-2 rounded-lg 
                          ${challenge.category === 'activity' ? 'bg-green-100 text-green-600' : 
                            challenge.category === 'hydration' ? 'bg-blue-100 text-blue-600' : 
                              'bg-purple-100 text-purple-600'}`}>
                          <challenge.icon size={24} />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="font-medium">{challenge.title}</h3>
                            {getCategoryBadge(challenge.category)}
                            {getTypeBadge(challenge.type)}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{challenge.description}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(challenge.startDate).toLocaleDateString()} - {new Date(challenge.endDate).toLocaleDateString()}
                          </p>
                          {challenge.type === 'team' && (
                            <p className="text-xs text-bucketlist-indigo mt-1">
                              Team: {challenge.teamName} ({challenge.teamMembers} members)
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Reward</p>
                        <p className="font-bold text-bucketlist-blue">{challenge.points} points</p>
                      </div>
                    </div>
                    
                    <div className="px-4 pb-4 pt-0">
                      <div className="mb-1 flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{Math.round((challenge.current / challenge.goal) * 100)}%</span>
                      </div>
                      <Progress value={(challenge.current / challenge.goal) * 100} className="h-2 mb-3" />
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">
                          {challenge.current} / {challenge.goal} {challenge.category === 'activity' ? 'steps' : challenge.category === 'hydration' ? 'glasses' : 'minutes'}
                        </span>
                        <Button size="sm" variant="outline">Log Progress</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Upcoming Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockUpcomingChallenges.map(challenge => (
                  <div key={challenge.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg 
                        ${challenge.category === 'seasonal' ? 'bg-orange-100 text-orange-600' : 
                          'bg-indigo-100 text-indigo-600'}`}>
                        <challenge.icon size={24} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-medium">{challenge.title}</h3>
                          {getCategoryBadge(challenge.category)}
                          {getTypeBadge(challenge.type)}
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{challenge.description}</p>
                        <p className="text-xs text-muted-foreground">
                          Starts: {new Date(challenge.startDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Reward</p>
                        <p className="font-bold text-bucketlist-blue">{challenge.points} points</p>
                      </div>
                      <Button onClick={() => handleJoinChallenge(challenge)}>Join Challenge</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button variant="outline" className="w-full">
                <Zap className="mr-2 h-4 w-4" />
                <span>View All Available Challenges</span>
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Company Wellness Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">1 Million Steps Challenge</h3>
                      <p className="text-xs text-muted-foreground">Company-wide goal</p>
                    </div>
                    <Badge className="bg-amber-500">In Progress</Badge>
                  </div>
                  <div className="space-y-1">
                    <Progress value={72} className="h-2" />
                    <div className="flex justify-between text-xs">
                      <span>Current: 720,546 steps</span>
                      <span>72%</span>
                    </div>
                  </div>
                  <p className="text-xs mt-2 text-muted-foreground">
                    When completed: $5,000 donation to Mental Health America
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">Meditation Minutes</h3>
                      <p className="text-xs text-muted-foreground">Stress reduction initiative</p>
                    </div>
                    <Badge className="bg-purple-500">In Progress</Badge>
                  </div>
                  <div className="space-y-1">
                    <Progress value={45} className="h-2" />
                    <div className="flex justify-between text-xs">
                      <span>Current: 4,500 minutes</span>
                      <span>45%</span>
                    </div>
                  </div>
                  <p className="text-xs mt-2 text-muted-foreground">
                    Goal: 10,000 company-wide meditation minutes
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">Wellness Challenge Participation</h3>
                      <p className="text-xs text-muted-foreground">Employee engagement</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Progress value={68} className="h-2" />
                    <div className="flex justify-between text-xs">
                      <span>Participation rate</span>
                      <span>68%</span>
                    </div>
                  </div>
                  <p className="text-xs mt-2 text-muted-foreground">
                    Goal: 80% of all employees participating
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Wellness Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockLeaderboard.map((person, index) => (
                  <div key={person.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center font-medium 
                        ${index === 0 ? 'bg-yellow-100 text-yellow-600' : 
                          index === 1 ? 'bg-gray-200 text-gray-600' : 
                            index === 2 ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-500'}`}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-medium">{person.name}</h3>
                        <p className="text-xs text-muted-foreground">{person.team}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-bucketlist-blue">{person.points}</p>
                      <p className="text-xs text-muted-foreground">wellness points</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button variant="outline" className="w-full">
                <Medal className="mr-2 h-4 w-4" />
                <span>View Full Leaderboard</span>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="mt-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Connected Apps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                      <span className="text-white text-xs font-bold">A</span>
                    </div>
                    <span>Apple Health</span>
                  </div>
                  <Badge className="bg-green-500">Connected</Badge>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">F</span>
                    </div>
                    <span>Fitbit</span>
                  </div>
                  <Button size="sm" variant="outline">Connect</Button>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                    <span>Google Fit</span>
                  </div>
                  <Button size="sm" variant="outline">Connect</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Join Challenge Dialog */}
      <Dialog open={showJoinDialog} onOpenChange={setShowJoinDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Join Challenge</DialogTitle>
            <DialogDescription>
              You're about to join the {selectedChallenge?.title} challenge.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <p className="text-sm">{selectedChallenge?.description}</p>
            
            <div className="flex flex-col gap-2 p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between">
                <span className="text-sm">Challenge Type:</span>
                <span className="text-sm font-medium">{selectedChallenge?.type === 'team' ? 'Team Challenge' : 'Individual Challenge'}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-sm">Duration:</span>
                <span className="text-sm font-medium">
                  {selectedChallenge && `${new Date(selectedChallenge.startDate).toLocaleDateString()} - ${new Date(selectedChallenge.endDate).toLocaleDateString()}`}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-sm">Reward:</span>
                <span className="text-sm font-medium text-bucketlist-blue">{selectedChallenge?.points} points</span>
              </div>
            </div>
            
            {selectedChallenge?.type === 'team' && (
              <div>
                <p className="text-sm font-medium mb-2">Select Team:</p>
                <select className="w-full p-2 border rounded-md">
                  <option>Marketing Team</option>
                  <option>Engineering Team</option>
                  <option>Sales Team</option>
                  <option>Support Team</option>
                  <option>Create New Team</option>
                </select>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowJoinDialog(false)}>
              Cancel
            </Button>
            <Button onClick={confirmJoinChallenge}>
              Join Challenge
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WellnessChallenges;
