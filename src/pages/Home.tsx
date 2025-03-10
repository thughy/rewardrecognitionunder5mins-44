
import React from 'react';
import { Award, Gift, MessageSquarePlus, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { QuickRecognitionWidget } from '@/components/QuickRecognitionWidget';
import { RecentRecognitions } from '@/components/RecentRecognitions';

const Home: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Welcome, John!</h1>
        <div className="flex items-center gap-2 bg-beekeeper-light rounded-lg px-3 py-1.5">
          <span className="text-sm font-medium">Your Points:</span>
          <span className="text-lg font-bold text-bucketlist-blue">450</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Recognitions Sent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-bold">12</div>
              <MessageSquarePlus className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="mt-2">
              <Progress value={60} className="h-1" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Recognitions Received</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-bold">8</div>
              <Award className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="mt-2">
              <Progress value={40} className="h-1" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Available Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-bold">15</div>
              <Gift className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="mt-2">
              <Progress value={75} className="h-1" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Team Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-bold">92%</div>
              <TrendingUp className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="mt-2">
              <Progress value={92} className="h-1" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Recent Recognitions</CardTitle>
              <CardDescription>
                Latest shoutouts from around your organization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentRecognitions />
              <div className="mt-4 text-center">
                <Button variant="outline" asChild>
                  <Link to="/feed">View All Recognitions</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Quick Recognition</CardTitle>
              <CardDescription>
                Give a colleague a shoutout
              </CardDescription>
            </CardHeader>
            <CardContent>
              <QuickRecognitionWidget />
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Milestones</CardTitle>
            <CardDescription>
              Celebrate your colleagues' special moments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-bucketlist-lightBlue flex items-center justify-center">
                    <Award className="h-5 w-5 text-bucketlist-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Sarah Kim's Work Anniversary</p>
                    <p className="text-sm text-muted-foreground">3 years at the company</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">Send a shoutout</Button>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-bucketlist-lightBlue flex items-center justify-center">
                    <Award className="h-5 w-5 text-bucketlist-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Mike Johnson's Birthday</p>
                    <p className="text-sm text-muted-foreground">Coming up this Friday</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">Send a shoutout</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
