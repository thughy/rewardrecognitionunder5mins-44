
import React, { useState } from 'react';
import { Clock, Calendar, Check, Trophy } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import OpportunityPageHeader from '@/components/opportunities/OpportunityPageHeader';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

// Mock data for available shifts
const mockAvailableShifts = [
  { 
    id: 1, 
    department: 'Customer Support', 
    date: '2023-11-05', 
    timeStart: '08:00', 
    timeEnd: '16:00', 
    points: 100,
    bonusPoints: 50,
    priority: 'high' 
  },
  { 
    id: 2, 
    department: 'Warehouse', 
    date: '2023-11-06', 
    timeStart: '06:00', 
    timeEnd: '14:00', 
    points: 120,
    bonusPoints: 0,
    priority: 'medium' 
  },
  { 
    id: 3, 
    department: 'Retail', 
    date: '2023-11-07', 
    timeStart: '12:00', 
    timeEnd: '20:00', 
    points: 100,
    bonusPoints: 25,
    priority: 'low' 
  },
  { 
    id: 4, 
    department: 'Customer Support', 
    date: '2023-11-08', 
    timeStart: '16:00', 
    timeEnd: '00:00', 
    points: 150,
    bonusPoints: 75,
    priority: 'high' 
  },
];

// Mock data for my shifts
const mockMyShifts = [
  { 
    id: 101, 
    department: 'Customer Support', 
    date: '2023-11-01', 
    timeStart: '08:00', 
    timeEnd: '16:00', 
    points: 100,
    status: 'completed',
    attendance: 'on-time'
  },
  { 
    id: 102, 
    department: 'Warehouse', 
    date: '2023-11-04', 
    timeStart: '14:00', 
    timeEnd: '22:00', 
    points: 120,
    status: 'upcoming',
    attendance: 'pending'
  },
];

// Mock data for leaderboard
const mockLeaderboard = [
  { id: 1, name: 'Alex Johnson', points: 1250, department: 'Customer Support' },
  { id: 2, name: 'Maria Garcia', points: 980, department: 'Warehouse' },
  { id: 3, name: 'David Kim', points: 820, department: 'Retail' },
  { id: 4, name: 'Taylor Smith', points: 750, department: 'IT Support' },
  { id: 5, name: 'Jamie Williams', points: 680, department: 'Customer Support' },
];

const ShiftIncentives = () => {
  const { toast } = useToast();
  const [confirmShiftDialog, setConfirmShiftDialog] = useState<{isOpen: boolean, shiftId: number | null}>({
    isOpen: false,
    shiftId: null
  });
  
  const handleClaimShift = (shiftId: number) => {
    setConfirmShiftDialog({
      isOpen: true,
      shiftId
    });
  };
  
  const confirmClaimShift = () => {
    setConfirmShiftDialog({
      isOpen: false,
      shiftId: null
    });
    
    toast({
      title: "Shift Claimed",
      description: "You have successfully claimed this shift.",
    });
  };
  
  const getPriorityBadge = (priority: string) => {
    switch(priority) {
      case 'high':
        return <Badge className="bg-red-500">High Priority</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-500">Medium Priority</Badge>;
      case 'low':
        return <Badge className="bg-green-500">Low Priority</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <OpportunityPageHeader
        title="Shift Incentives"
        description="Earn extra points by picking up available shifts"
        icon={Clock}
        ctaText="View Available Shifts"
        onCtaClick={() => document.getElementById('available-shifts')?.scrollIntoView({ behavior: 'smooth' })}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card id="available-shifts">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Available Shifts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockAvailableShifts.map(shift => (
                  <div key={shift.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">{shift.department}</h3>
                        <p className="text-sm text-muted-foreground">
                          {new Date(shift.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                          {' • '}
                          {shift.timeStart} - {shift.timeEnd}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          {getPriorityBadge(shift.priority)}
                          {shift.bonusPoints > 0 && (
                            <Badge variant="outline" className="border-amber-500 text-amber-500">
                              +{shift.bonusPoints} Bonus Points
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mt-4 md:mt-0">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Points</p>
                        <p className="font-bold text-bucketlist-blue">{shift.points + shift.bonusPoints}</p>
                      </div>
                      <Button onClick={() => handleClaimShift(shift.id)}>Claim Shift</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">My Shifts</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="upcoming">
                <TabsList className="mb-4">
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upcoming" className="space-y-4">
                  {mockMyShifts.filter(s => s.status === 'upcoming').map(shift => (
                    <div key={shift.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                          <Calendar size={20} />
                        </div>
                        <div>
                          <h3 className="font-medium">{shift.department}</h3>
                          <p className="text-sm text-muted-foreground">
                            {new Date(shift.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                            {' • '}
                            {shift.timeStart} - {shift.timeEnd}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Points</p>
                        <p className="font-bold text-bucketlist-blue">{shift.points}</p>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="completed" className="space-y-4">
                  {mockMyShifts.filter(s => s.status === 'completed').map(shift => (
                    <div key={shift.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-green-100 text-green-600">
                          <Check size={20} />
                        </div>
                        <div>
                          <h3 className="font-medium">{shift.department}</h3>
                          <p className="text-sm text-muted-foreground">
                            {new Date(shift.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                            {' • '}
                            {shift.timeStart} - {shift.timeEnd}
                          </p>
                          <div className="mt-1">
                            <Badge variant="outline" className="text-green-600 border-green-600">On Time</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Points Earned</p>
                        <p className="font-bold text-green-600">{shift.points}</p>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Shift Leaderboard</CardTitle>
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
                        <p className="text-xs text-muted-foreground">{person.department}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-bucketlist-blue">{person.points}</p>
                      <p className="text-xs text-muted-foreground">points</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button variant="outline" className="w-full">
                <Trophy className="mr-2 h-4 w-4" />
                <span>View Full Leaderboard</span>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="mt-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">My Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Total Points Earned</p>
                  <p className="text-2xl font-bold text-bucketlist-blue">750</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Shifts Completed</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Perfect Attendance</span>
                    <span className="font-medium">
                      <span className="text-green-600">100%</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Bonus Points Earned</span>
                    <span className="font-medium text-amber-500">150</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Current Rank</span>
                    <span className="font-medium">#4</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Confirm Shift Dialog */}
      <Dialog open={confirmShiftDialog.isOpen} onOpenChange={(isOpen) => setConfirmShiftDialog({...confirmShiftDialog, isOpen})}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Shift Claim</DialogTitle>
            <DialogDescription>
              Are you sure you want to claim this shift? Once confirmed, your manager will be notified.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm">
              By claiming this shift, you agree to be available during the scheduled hours. Cancellations without prior notice may affect your future eligibility for shift bonuses.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmShiftDialog({isOpen: false, shiftId: null})}>
              Cancel
            </Button>
            <Button onClick={confirmClaimShift}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShiftIncentives;
