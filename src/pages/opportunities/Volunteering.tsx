
import React, { useState } from 'react';
import { Users, CalendarHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import OpportunityPageHeader from '@/components/opportunities/OpportunityPageHeader';

const VolunteeringPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleVolunteerClick = () => {
    setShowForm(true);
  };

  return (
    <div className="container mx-auto py-6">
      <OpportunityPageHeader
        title="Volunteering & Social Impact"
        description="Make a difference in your community while earning rewards"
        icon={CalendarHeart}
        ctaText="Sign Up to Volunteer"
        onCtaClick={handleVolunteerClick}
      />

      <Tabs defaultValue="upcoming">
        <TabsList className="mb-6">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="myactivities">My Activities</TabsTrigger>
          <TabsTrigger value="impact">Company Impact</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{event.title}</CardTitle>
                    <Badge variant={event.category === 'Community' ? 'default' : 'outline'}>
                      {event.category}
                    </Badge>
                  </div>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{event.participants} participants</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={handleVolunteerClick}>
                    Join Event
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="myactivities" className="space-y-4">
          <div className="bg-slate-50 p-6 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Your Impact</h3>
              <Badge variant="secondary">Level 2 Volunteer</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-bucketlist-blue">12</p>
                <p className="text-sm text-muted-foreground">Hours Volunteered</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-bucketlist-blue">3</p>
                <p className="text-sm text-muted-foreground">Events Attended</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-bucketlist-blue">250</p>
                <p className="text-sm text-muted-foreground">Points Earned</p>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress to Silver Badge</span>
                <span>65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-4">Your Recent Activities</h3>
          {userActivities.map((activity) => (
            <Card key={activity.id} className="mb-4">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{activity.title}</CardTitle>
                  <Badge>{activity.status}</Badge>
                </div>
                <CardDescription>{activity.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{activity.description}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="font-medium text-bucketlist-blue">+{activity.pointsEarned} points earned</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="impact" className="space-y-4">
          <div className="bg-slate-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-4">Company-wide Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-bucketlist-blue">1,245</p>
                <p className="text-sm text-muted-foreground">Total Hours</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-bucketlist-blue">42</p>
                <p className="text-sm text-muted-foreground">Organizations Helped</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-bucketlist-blue">68%</p>
                <p className="text-sm text-muted-foreground">Employee Participation</p>
              </div>
            </div>
            
            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span>Goal: 2,000 hours by year end</span>
                <span>62%</span>
              </div>
              <Progress value={62} className="h-2" />
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-4">Top Volunteers This Quarter</h3>
          <div className="bg-white rounded-lg shadow-sm">
            {topVolunteers.map((volunteer, index) => (
              <div 
                key={volunteer.id} 
                className={`flex justify-between items-center p-4 ${
                  index !== topVolunteers.length - 1 ? 'border-b' : ''
                }`}
              >
                <div className="flex items-center">
                  <div className="bg-bucketlist-blue/10 text-bucketlist-blue w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{volunteer.name}</p>
                    <p className="text-sm text-muted-foreground">{volunteer.department}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{volunteer.hours} hours</p>
                  <p className="text-sm text-bucketlist-blue">{volunteer.events} events</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Sample data
const upcomingEvents = [
  {
    id: 1,
    title: "Community Garden Project",
    date: "Nov 15, 2023 • 9:00 AM",
    description: "Help revitalize the community garden at Lincoln Park. Activities include planting, weeding, and building new garden beds.",
    category: "Community",
    participants: 12,
  },
  {
    id: 2,
    title: "Food Bank Distribution",
    date: "Nov 18, 2023 • 1:00 PM",
    description: "Volunteer at the regional food bank to sort and distribute food packages to families in need.",
    category: "Humanitarian",
    participants: 8,
  },
  {
    id: 3,
    title: "Tech Literacy for Seniors",
    date: "Nov 22, 2023 • 10:00 AM",
    description: "Teach basic computer and smartphone skills to seniors at the community center.",
    category: "Education",
    participants: 5,
  },
  {
    id: 4,
    title: "Beach Cleanup Day",
    date: "Dec 2, 2023 • 8:00 AM",
    description: "Join us for a day of cleaning up the shoreline and documenting marine debris.",
    category: "Environment",
    participants: 20,
  },
  {
    id: 5,
    title: "Holiday Gift Drive",
    date: "Dec 10, 2023 • 11:00 AM",
    description: "Help collect, sort, and wrap gifts for children in need during the holiday season.",
    category: "Community",
    participants: 15,
  },
  {
    id: 6,
    title: "Habitat for Humanity Build",
    date: "Dec 16, 2023 • 8:30 AM",
    description: "Participate in building affordable housing for families in our community. No construction experience needed!",
    category: "Humanitarian",
    participants: 10,
  },
];

const userActivities = [
  {
    id: 1,
    title: "Park Cleanup Project",
    date: "Oct 12, 2023",
    description: "Helped remove trash and plant new trees in Cedar Park.",
    status: "Completed",
    pointsEarned: 75,
  },
  {
    id: 2,
    title: "Coding Workshop for Kids",
    date: "Sept 28, 2023",
    description: "Taught basic programming concepts to middle school students.",
    status: "Completed",
    pointsEarned: 100,
  },
  {
    id: 3,
    title: "Homeless Shelter Meal Service",
    date: "Sept 15, 2023",
    description: "Prepared and served meals at the downtown homeless shelter.",
    status: "Completed",
    pointsEarned: 75,
  },
];

const topVolunteers = [
  {
    id: 1,
    name: "Sarah Johnson",
    department: "Marketing",
    hours: 28,
    events: 6,
  },
  {
    id: 2,
    name: "Michael Chen",
    department: "Engineering",
    hours: 24,
    events: 5,
  },
  {
    id: 3,
    name: "Priya Patel",
    department: "Customer Support",
    hours: 20,
    events: 4,
  },
  {
    id: 4,
    name: "David Okafor",
    department: "Human Resources",
    hours: 18,
    events: 4,
  },
  {
    id: 5,
    name: "Emma Rodriguez",
    department: "Finance",
    hours: 16,
    events: 3,
  },
];

export default VolunteeringPage;
