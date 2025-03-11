
import React, { useState } from 'react';
import { GraduationCap, BookOpen, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import OpportunityPageHeader from '@/components/opportunities/OpportunityPageHeader';

// Mock data for courses
const mockCourses = [
  {
    id: 1,
    title: 'Introduction to Leadership',
    provider: 'LinkedIn Learning',
    duration: '4 hours',
    points: 200,
    status: 'in-progress',
    progress: 60,
    category: 'leadership',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400&h=250'
  },
  {
    id: 2,
    title: 'Advanced Excel Techniques',
    provider: 'Udemy',
    duration: '6 hours',
    points: 300,
    status: 'not-started',
    progress: 0,
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1460925895917-adb15560981d?auto=format&fit=crop&q=80&w=400&h=250'
  },
  {
    id: 3,
    title: 'Effective Communication Skills',
    provider: 'Coursera',
    duration: '3 hours',
    points: 150,
    status: 'completed',
    progress: 100,
    category: 'soft-skills',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400&h=250'
  },
  {
    id: 4,
    title: 'Project Management Fundamentals',
    provider: 'Udemy',
    duration: '8 hours',
    points: 400,
    status: 'not-started',
    progress: 0,
    category: 'management',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400&h=250'
  },
  {
    id: 5,
    title: 'Design Thinking Workshop',
    provider: 'Coursera',
    duration: '5 hours',
    points: 250,
    status: 'in-progress',
    progress: 25,
    category: 'creativity',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=400&h=250'
  },
  {
    id: 6,
    title: 'Public Speaking Mastery',
    provider: 'LinkedIn Learning',
    duration: '4 hours',
    points: 200,
    status: 'completed',
    progress: 100,
    category: 'soft-skills',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=400&h=250'
  },
];

// Mock data for certificates
const mockCertificates = [
  { 
    id: 1, 
    title: 'Effective Communication Skills', 
    issueDate: '2023-09-15', 
    provider: 'Coursera',
    points: 150
  },
  { 
    id: 2, 
    title: 'Public Speaking Mastery', 
    issueDate: '2023-08-20', 
    provider: 'LinkedIn Learning',
    points: 200
  },
];

// Mock data for career path skills
const mockCareerPathSkills = [
  { id: 1, name: 'Leadership', progress: 70, required: true },
  { id: 2, name: 'Technical Knowledge', progress: 60, required: true },
  { id: 3, name: 'Communication', progress: 85, required: true },
  { id: 4, name: 'Project Management', progress: 40, required: true },
  { id: 5, name: 'Problem Solving', progress: 75, required: false },
];

const LearningDevelopment = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredCourses = filter === 'all' 
    ? mockCourses 
    : mockCourses.filter(course => 
        filter === 'in-progress' 
          ? course.status === 'in-progress' 
          : filter === 'completed' 
            ? course.status === 'completed' 
            : course.status === 'not-started');
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'in-progress':
        return <Badge className="bg-blue-500">In Progress</Badge>;
      case 'completed':
        return <Badge className="bg-green-500">Completed</Badge>;
      case 'not-started':
        return <Badge variant="outline">Not Started</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <OpportunityPageHeader
        title="Learning & Development"
        description="Enhance your skills and earn rewards for completing courses"
        icon={GraduationCap}
        ctaText="Browse Courses"
        onCtaClick={() => document.getElementById('learning-courses')?.scrollIntoView({ behavior: 'smooth' })}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card id="learning-courses">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <CardTitle className="text-lg font-medium">Available Courses</CardTitle>
                <div className="flex space-x-2">
                  <Button 
                    variant={filter === 'all' ? 'default' : 'outline'} 
                    size="sm" 
                    onClick={() => setFilter('all')}
                  >
                    All
                  </Button>
                  <Button 
                    variant={filter === 'in-progress' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setFilter('in-progress')}
                  >
                    In Progress
                  </Button>
                  <Button 
                    variant={filter === 'completed' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setFilter('completed')}
                  >
                    Completed
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCourses.map(course => (
                  <div key={course.id} className="border rounded-lg overflow-hidden flex flex-col">
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                      <div className="absolute top-2 right-2">
                        {getStatusBadge(course.status)}
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="font-medium mb-1">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {course.provider} • {course.duration}
                      </p>
                      {course.status === 'in-progress' && (
                        <div className="mt-2 mb-3">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-1.5" />
                        </div>
                      )}
                      <div className="mt-auto pt-3 flex items-center justify-between">
                        <Badge variant="outline" className="border-bucketlist-blue text-bucketlist-blue">
                          {course.points} points
                        </Badge>
                        <Button variant="outline" size="sm">
                          {course.status === 'completed' ? 'View Certificate' : 'Start Learning'}
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button variant="outline" className="w-full">
                <BookOpen className="mr-2 h-4 w-4" />
                <span>View All Available Courses</span>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="mt-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">My Learning Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="certificates">
                <TabsList className="mb-4">
                  <TabsTrigger value="certificates">My Certificates</TabsTrigger>
                  <TabsTrigger value="progress">Career Path Progress</TabsTrigger>
                </TabsList>
                
                <TabsContent value="certificates" className="space-y-4">
                  {mockCertificates.map(cert => (
                    <div key={cert.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-green-100 text-green-600">
                          <Award size={20} />
                        </div>
                        <div>
                          <h3 className="font-medium">{cert.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {cert.provider} • Issued on {new Date(cert.issueDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Points Earned</p>
                        <p className="font-bold text-green-600">{cert.points}</p>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="progress" className="space-y-4">
                  {mockCareerPathSkills.map(skill => (
                    <div key={skill.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{skill.name}</span>
                          {skill.required && (
                            <Badge variant="outline" className="text-xs">Required</Badge>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.progress}%</span>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
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
              <CardTitle className="text-lg font-medium">Learning Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Courses Completed</p>
                  <p className="text-2xl font-bold text-bucketlist-blue">2</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">In Progress</p>
                  <p className="text-2xl font-bold text-bucketlist-blue">2</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Total Hours</p>
                  <p className="text-2xl font-bold text-bucketlist-blue">7</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Points Earned</p>
                  <p className="text-2xl font-bold text-bucketlist-blue">350</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Career Development Progress</p>
                  <div className="space-y-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-bucketlist-blue h-2.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Current Level: Associate</span>
                      <span>Next: Senior Associate</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Recommended Skills</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 border rounded">
                      <span>Project Management</span>
                      <Badge variant="outline" className="text-xs">High Priority</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 border rounded">
                      <span>Data Analysis</span>
                      <Badge variant="outline" className="text-xs">Medium Priority</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 border rounded">
                      <span>Presentation Skills</span>
                      <Badge variant="outline" className="text-xs">Medium Priority</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button variant="outline" className="w-full">
                <GraduationCap className="mr-2 h-4 w-4" />
                <span>View Career Path</span>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="mt-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Learning Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600 mb-2">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="font-medium text-center">Course Completer</h3>
                  <p className="text-xs text-center text-muted-foreground">Complete 5 courses</p>
                  <div className="mt-2 w-full">
                    <Progress value={40} className="h-1.5" />
                  </div>
                  <p className="text-xs mt-1 text-muted-foreground">2/5</p>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <div className="p-3 rounded-full bg-green-100 text-green-600 mb-2">
                    <CheckCircle size={24} />
                  </div>
                  <h3 className="font-medium text-center">Skill Master</h3>
                  <p className="text-xs text-center text-muted-foreground">Master 3 skill areas</p>
                  <div className="mt-2 w-full">
                    <Progress value={33} className="h-1.5" />
                  </div>
                  <p className="text-xs mt-1 text-muted-foreground">1/3</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LearningDevelopment;
