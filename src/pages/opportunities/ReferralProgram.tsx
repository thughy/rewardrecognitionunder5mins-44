
import React, { useState } from 'react';
import { UserPlus, Check, Clock, Calendar, XCircle, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import OpportunityPageHeader from '@/components/opportunities/OpportunityPageHeader';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

// Mock data for referrals
const mockReferrals = [
  { 
    id: 1, 
    name: 'John Smith', 
    position: 'Frontend Developer', 
    date: '2023-10-15', 
    status: 'interviewing',
    stage: 'Technical Interview' 
  },
  { 
    id: 2, 
    name: 'Sarah Johnson', 
    position: 'Product Manager', 
    date: '2023-09-28', 
    status: 'hired',
    stage: 'Onboarding' 
  },
  { 
    id: 3, 
    name: 'Michael Brown', 
    position: 'UX Designer', 
    date: '2023-10-20', 
    status: 'pending',
    stage: 'Resume Review' 
  }
];

// Mock data for badges
const mockBadges = [
  { id: 1, name: 'Talent Scout', description: 'Referred 1 candidate', earned: true },
  { id: 2, name: 'Super Recruiter', description: 'Referred 5 candidates', earned: false },
  { id: 3, name: 'Hiring Hero', description: 'Had 3 successful hires', earned: false }
];

const ReferralProgram = () => {
  const { toast } = useToast();
  const [isReferralDialogOpen, setIsReferralDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('active');
  
  const handleSubmitReferral = (e: React.FormEvent) => {
    e.preventDefault();
    setIsReferralDialogOpen(false);
    toast({
      title: "Referral Submitted",
      description: "Your referral has been successfully submitted for review.",
    });
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'pending':
        return <span className="flex items-center gap-1 text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full text-xs"><Clock size={12} /> Pending</span>;
      case 'interviewing':
        return <span className="flex items-center gap-1 text-blue-600 bg-blue-100 px-2 py-1 rounded-full text-xs"><Calendar size={12} /> Interviewing</span>;
      case 'hired':
        return <span className="flex items-center gap-1 text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs"><Check size={12} /> Hired</span>;
      case 'rejected':
        return <span className="flex items-center gap-1 text-red-600 bg-red-100 px-2 py-1 rounded-full text-xs"><XCircle size={12} /> Not Selected</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <OpportunityPageHeader
        title="Referral Program"
        description="Refer top talent and earn rewards for successful hires"
        icon={UserPlus}
        ctaText="Refer & Earn"
        onCtaClick={() => setIsReferralDialogOpen(true)}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">My Referrals</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="active" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-4">
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="all">All Referrals</TabsTrigger>
                </TabsList>
                
                <TabsContent value="active" className="space-y-4">
                  {mockReferrals.filter(r => r.status !== 'hired' && r.status !== 'rejected').map(referral => (
                    <div key={referral.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{referral.name}</h3>
                        <p className="text-sm text-muted-foreground">{referral.position}</p>
                        <div className="flex items-center gap-2 mt-1">
                          {getStatusBadge(referral.status)}
                          <span className="text-xs text-muted-foreground">Current Stage: {referral.stage}</span>
                        </div>
                      </div>
                      <div className="text-sm text-right">
                        <p className="text-muted-foreground">Referred on</p>
                        <p>{new Date(referral.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="completed" className="space-y-4">
                  {mockReferrals.filter(r => r.status === 'hired' || r.status === 'rejected').map(referral => (
                    <div key={referral.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{referral.name}</h3>
                        <p className="text-sm text-muted-foreground">{referral.position}</p>
                        <div className="flex items-center gap-2 mt-1">
                          {getStatusBadge(referral.status)}
                        </div>
                      </div>
                      <div className="text-sm text-right">
                        <p className="text-muted-foreground">Referred on</p>
                        <p>{new Date(referral.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="all" className="space-y-4">
                  {mockReferrals.map(referral => (
                    <div key={referral.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{referral.name}</h3>
                        <p className="text-sm text-muted-foreground">{referral.position}</p>
                        <div className="flex items-center gap-2 mt-1">
                          {getStatusBadge(referral.status)}
                        </div>
                      </div>
                      <div className="text-sm text-right">
                        <p className="text-muted-foreground">Referred on</p>
                        <p>{new Date(referral.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <div className="flex justify-between items-center w-full">
                <p className="text-sm text-muted-foreground">
                  Total Referrals: {mockReferrals.length}
                </p>
                <Button size="sm" variant="outline" onClick={() => setIsReferralDialogOpen(true)}>
                  New Referral
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">My Badges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockBadges.map(badge => (
                <div key={badge.id} className="flex items-center gap-3 p-3 border rounded-lg">
                  <div className={`p-2 rounded-full ${badge.earned ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">{badge.name}</h3>
                    <p className="text-xs text-muted-foreground">{badge.description}</p>
                  </div>
                  {badge.earned && (
                    <div className="ml-auto">
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Earned</span>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
            <CardFooter className="border-t pt-4">
              <div className="w-full">
                <p className="text-sm text-muted-foreground mb-2">Badges Earned</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-bucketlist-blue h-2.5 rounded-full" style={{ width: '33%' }}></div>
                </div>
                <p className="text-xs text-right mt-1 text-muted-foreground">1 of 3</p>
              </div>
            </CardFooter>
          </Card>
          
          <Card className="mt-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Rewards Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Points Per Referral</span>
                  <span className="font-medium">50 pts</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Points Per Interview</span>
                  <span className="font-medium">100 pts</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Points Per Hire</span>
                  <span className="font-medium">500 pts</span>
                </div>
                <div className="pt-3 mt-3 border-t">
                  <div className="flex justify-between items-center font-medium">
                    <span>Total Earned</span>
                    <span className="text-bucketlist-blue">650 pts</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Referral Form Dialog */}
      <Dialog open={isReferralDialogOpen} onOpenChange={setIsReferralDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Refer a Candidate</DialogTitle>
            <DialogDescription>
              Submit candidate information for review by our hiring team.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitReferral}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="candidateName" className="text-right">
                  Name
                </Label>
                <Input
                  id="candidateName"
                  placeholder="Candidate's full name"
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="candidateEmail" className="text-right">
                  Email
                </Label>
                <Input
                  id="candidateEmail"
                  placeholder="candidate@example.com"
                  type="email"
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="position" className="text-right">
                  Position
                </Label>
                <Input
                  id="position"
                  placeholder="Position they're applying for"
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="relationship" className="text-right">
                  Relationship
                </Label>
                <Input
                  id="relationship"
                  placeholder="How do you know this candidate?"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="notes" className="text-right align-top pt-2">
                  Notes
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Any additional information about the candidate"
                  className="col-span-3"
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsReferralDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Submit Referral</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReferralProgram;
