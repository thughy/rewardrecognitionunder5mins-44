
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Clipboard, Clock, FileText, Send } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Define proper types for surveys
interface ActiveSurvey {
  id: number;
  title: string;
  description: string;
  deadline: string;
  completed: boolean;
  progress: number;
}

interface CompletedSurvey {
  id: number;
  title: string;
  description: string;
  completedOn: string;
  completed: boolean;
}

// Sample survey data with proper typing
const activeSurveys: ActiveSurvey[] = [
  {
    id: 1,
    title: 'Q4 Employee Engagement Survey',
    description: 'Share your thoughts on company culture and work environment',
    deadline: 'Oct 30, 2023',
    completed: false,
    progress: 0,
  },
  {
    id: 2,
    title: 'Remote Work Experience',
    description: 'Help us understand your experience with remote work',
    deadline: 'Nov 15, 2023',
    completed: false,
    progress: 30,
  },
];

const completedSurveys: CompletedSurvey[] = [
  {
    id: 3,
    title: 'Annual Benefits Review',
    description: 'Review and provide feedback on our benefits package',
    completedOn: 'Sep 5, 2023',
    completed: true,
  },
  {
    id: 4,
    title: 'Learning & Development Needs',
    description: 'Share your professional development goals',
    completedOn: 'Aug 22, 2023',
    completed: true,
  },
];

const Surveys: React.FC = () => {
  const [newSurvey, setNewSurvey] = useState({
    title: '',
    description: '',
    deadline: '',
    targetAudience: 'all'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewSurvey(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setNewSurvey(prev => ({
      ...prev,
      targetAudience: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Survey created:', newSurvey);
    // Here you would typically save the new survey to your backend
    // and update the local state or trigger a refetch
    
    // Reset the form
    setNewSurvey({
      title: '',
      description: '',
      deadline: '',
      targetAudience: 'all'
    });

    // This would close the sheet in a real implementation
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Employee Surveys</h1>
          <p className="text-muted-foreground">Share your voice and help shape our workplace</p>
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-bucketlist-blue hover:bg-bucketlist-indigo">
              <FileText className="mr-2 h-4 w-4" />
              Create Survey
            </Button>
          </SheetTrigger>
          <SheetContent className="sm:max-w-md">
            <SheetHeader>
              <SheetTitle>Create New Survey</SheetTitle>
              <SheetDescription>
                Create and deploy a new survey to gather feedback from your team.
              </SheetDescription>
            </SheetHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  Survey Title
                </label>
                <Input 
                  id="title" 
                  name="title" 
                  value={newSurvey.title} 
                  onChange={handleInputChange} 
                  placeholder="e.g. Employee Satisfaction Survey" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <Textarea 
                  id="description" 
                  name="description" 
                  value={newSurvey.description} 
                  onChange={handleInputChange} 
                  placeholder="Briefly describe the purpose of this survey" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="deadline" className="text-sm font-medium">
                  Deadline
                </label>
                <Input 
                  id="deadline" 
                  name="deadline" 
                  type="date" 
                  value={newSurvey.deadline} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="targetAudience" className="text-sm font-medium">
                  Target Audience
                </label>
                <Select 
                  value={newSurvey.targetAudience} 
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Employees</SelectItem>
                    <SelectItem value="department">By Department</SelectItem>
                    <SelectItem value="location">By Location</SelectItem>
                    <SelectItem value="custom">Custom Group</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <SheetFooter className="pt-4">
                <Button type="submit" className="w-full">Create Survey</Button>
              </SheetFooter>
            </form>
          </SheetContent>
        </Sheet>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">
            Active
            {activeSurveys.length > 0 && (
              <Badge variant="secondary" className="ml-2">{activeSurveys.length}</Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed
            {completedSurveys.length > 0 && (
              <Badge variant="secondary" className="ml-2">{completedSurveys.length}</Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="all">All Surveys</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="space-y-4">
          {activeSurveys.map(survey => (
            <Card key={survey.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{survey.title}</CardTitle>
                    <CardDescription>{survey.description}</CardDescription>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Due {survey.deadline}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Completion</span>
                    <span>{survey.progress}%</span>
                  </div>
                  <Progress value={survey.progress} className="h-2" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  {survey.progress > 0 ? (
                    <>
                      <Clipboard className="mr-2 h-4 w-4" />
                      Continue Survey
                    </>
                  ) : (
                    <>
                      <Clipboard className="mr-2 h-4 w-4" />
                      Start Survey
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-4">
          {completedSurveys.map(survey => (
            <Card key={survey.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{survey.title}</CardTitle>
                    <CardDescription>{survey.description}</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Completed
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Completed on {survey.completedOn}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  View Responses
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {[...activeSurveys, ...completedSurveys].map(survey => (
              <Card key={survey.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{survey.title}</CardTitle>
                      <CardDescription>{survey.description}</CardDescription>
                    </div>
                    {'completed' in survey ? (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Completed
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Due {survey.deadline}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardFooter>
                  {'completed' in survey ? (
                    <Button variant="outline" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      View Responses
                    </Button>
                  ) : (
                    <Button className="w-full">
                      <Clipboard className="mr-2 h-4 w-4" />
                      {survey.progress > 0 ? 'Continue Survey' : 'Start Survey'}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Surveys;
