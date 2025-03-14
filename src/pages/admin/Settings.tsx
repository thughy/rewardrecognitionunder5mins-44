
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
      </div>
      
      <Tabs defaultValue="general">
        <TabsList className="mb-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="values">Company Values</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integration">Integration</TabsTrigger>
          <TabsTrigger value="hris">HRIS & Integrations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Program Settings</CardTitle>
              <CardDescription>
                Manage your recognition program settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="program-name">Program Name</Label>
                <Input id="program-name" defaultValue="BeeRecognized" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="points-name">Points Currency Name</Label>
                <Input id="points-name" defaultValue="Pato Points" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="monthly-points">Monthly Points Budget per Employee</Label>
                <Input id="monthly-points" type="number" defaultValue="100" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="recognition-approval">Recognition Approval</Label>
                <div className="flex items-center space-x-2">
                  <Switch id="recognition-approval" />
                  <Label htmlFor="recognition-approval">Require manager approval for recognitions</Label>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Profile Visibility</CardTitle>
              <CardDescription>
                Control what information is visible to users
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Show Recognition Leaderboard</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow users to see top performers
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Show Points Balance</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow users to see each other's point balances
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Public Feed</Label>
                  <p className="text-sm text-muted-foreground">
                    Make recognition feed visible to all employees
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="values" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Company Values</CardTitle>
              <CardDescription>
                Manage the core values used for recognition
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Innovation</Label>
                <div className="flex gap-2">
                  <Input defaultValue="Innovation" className="flex-1" />
                  <Button variant="outline" size="icon">
                    <span className="sr-only">Edit</span>
                    <span>✏️</span>
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Teamwork</Label>
                <div className="flex gap-2">
                  <Input defaultValue="Teamwork" className="flex-1" />
                  <Button variant="outline" size="icon">
                    <span className="sr-only">Edit</span>
                    <span>✏️</span>
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Excellence</Label>
                <div className="flex gap-2">
                  <Input defaultValue="Excellence" className="flex-1" />
                  <Button variant="outline" size="icon">
                    <span className="sr-only">Edit</span>
                    <span>✏️</span>
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Customer Focus</Label>
                <div className="flex gap-2">
                  <Input defaultValue="Customer Focus" className="flex-1" />
                  <Button variant="outline" size="icon">
                    <span className="sr-only">Edit</span>
                    <span>✏️</span>
                  </Button>
                </div>
              </div>
              
              <Button className="w-full" variant="outline">+ Add New Value</Button>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="rewards" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Rewards Management</CardTitle>
              <CardDescription>
                Configure available rewards and redemption options
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <p>Rewards management coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Manage how and when users receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <p>Notification settings coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="integration" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pato's Holding Corp. Integration</CardTitle>
              <CardDescription>
                Configure how Bucketlist Rewards integrates with Pato's Holding Corp.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 text-green-700 p-3 rounded-md text-sm">
                Integration status: Connected to Pato's Holding Corp.
              </div>
              
              <div className="space-y-2">
                <Label>SSO Configuration</Label>
                <div className="flex items-center space-x-2">
                  <Switch id="sso-enabled" defaultChecked />
                  <Label htmlFor="sso-enabled">Enable Single Sign-On</Label>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Activity Feed Integration</Label>
                <div className="flex items-center space-x-2">
                  <Switch id="feed-integration" defaultChecked />
                  <Label htmlFor="feed-integration">Post recognitions to Pato's Holding Corp. activity feed</Label>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>User Synchronization</Label>
                <div className="flex items-center space-x-2">
                  <Switch id="user-sync" defaultChecked />
                  <Label htmlFor="user-sync">Automatically sync user profiles from Pato's Holding Corp.</Label>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Integration Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="hris" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>HR Systems Integration</CardTitle>
              <CardDescription>
                Connect your HR systems to automate employee data synchronization
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <h4 className="font-semibold">Workday HRIS</h4>
                    <p className="text-sm text-muted-foreground">Sync employee profiles and org structure</p>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <h4 className="font-semibold">ADP Payroll</h4>
                    <p className="text-sm text-muted-foreground">Integration for rewards redemption and points tracking</p>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <h4 className="font-semibold">Cornerstone LMS</h4>
                    <p className="text-sm text-muted-foreground">Connect learning achievements with rewards</p>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <h4 className="font-semibold">BambooHR</h4>
                    <p className="text-sm text-muted-foreground">Employee data and milestone tracking</p>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
