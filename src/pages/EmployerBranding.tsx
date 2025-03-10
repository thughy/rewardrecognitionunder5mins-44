import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Building, 
  Download, 
  ExternalLink, 
  Flag, 
  Heart, 
  Image, 
  Instagram, 
  Linkedin, 
  MessageSquare, 
  Share2, 
  Star, 
  ThumbsUp, 
  TiktokIcon, 
  Upload, 
  Users 
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';

const Tiktok = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-tiktok"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const EmployerBranding: React.FC = () => {
  const [shareStoryOpen, setShareStoryOpen] = useState(false);
  const [boostReviewsOpen, setBoostReviewsOpen] = useState(false);
  const [glassdoorRating, setGlassdoorRating] = useState(4.3);
  const [comparablyRating, setComparablyRating] = useState(8.7);
  const [employeeShares, setEmployeeShares] = useState(142);

  const handleShareStory = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShareStoryOpen(false);
    toast({
      title: "Story shared!",
      description: "Your story has been submitted for approval and will appear in the feed soon.",
    });
    setEmployeeShares(prev => prev + 1);
  };

  const handleBoostReviews = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBoostReviewsOpen(false);
    toast({
      title: "Review boost initiated!",
      description: "Notifications have been sent to all employees.",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Employer Branding</h1>
          <p className="text-muted-foreground">Showcase and strengthen our company culture</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Sheet open={shareStoryOpen} onOpenChange={setShareStoryOpen}>
            <SheetTrigger asChild>
              <Button className="bg-bucketlist-blue hover:bg-bucketlist-indigo">
                <Upload className="mr-2 h-4 w-4" />
                Share Your Story
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Share Your Story</SheetTitle>
                <SheetDescription>
                  Share your experience working at Pato's Holding Corp. This will be reviewed before being published.
                </SheetDescription>
              </SheetHeader>
              <form onSubmit={handleShareStory} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <label htmlFor="story-title" className="text-sm font-medium">Title</label>
                  <Input id="story-title" placeholder="My Experience at Pato's" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="story-content" className="text-sm font-medium">Your Story</label>
                  <Textarea 
                    id="story-content" 
                    placeholder="Share what makes working at Pato's special..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="story-image" className="text-sm font-medium">Upload Image (optional)</label>
                  <Input id="story-image" type="file" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Share to</label>
                  <div className="flex gap-2">
                    <Button type="button" variant="outline" className="flex gap-2">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Button>
                    <Button type="button" variant="outline" className="flex gap-2">
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </Button>
                    <Button type="button" variant="outline" className="flex gap-2">
                      <Tiktok className="h-4 w-4" />
                      TikTok
                    </Button>
                  </div>
                </div>
                <div className="pt-4 flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setShareStoryOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    Submit Story
                  </Button>
                </div>
              </form>
            </SheetContent>
          </Sheet>
          
          <Sheet open={boostReviewsOpen} onOpenChange={setBoostReviewsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="bg-gradient-to-r from-yellow-50 to-yellow-100 text-amber-700 border-amber-200 hover:bg-yellow-200 hover:text-amber-800">
                <Star className="mr-2 h-4 w-4 text-amber-500" />
                Boost Glassdoor Reviews
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Boost Glassdoor Reviews</SheetTitle>
                <SheetDescription>
                  Request employees to share their experiences on Glassdoor to improve our employer brand.
                </SheetDescription>
              </SheetHeader>
              <form onSubmit={handleBoostReviews} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <label htmlFor="boost-message" className="text-sm font-medium">Message to Employees</label>
                  <Textarea 
                    id="boost-message" 
                    placeholder="Help us showcase our culture by sharing your experience on Glassdoor..."
                    className="min-h-[120px]"
                    defaultValue="We value your contribution to our company culture! Please take a moment to share your experience on Glassdoor - it helps us attract great talent and build our employer brand."
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Target Audience</label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">All Employees</Badge>
                    <Badge variant="outline">Engineering</Badge>
                    <Badge variant="outline">Marketing</Badge>
                    <Badge variant="outline">Sales</Badge>
                    <Badge variant="outline">HR</Badge>
                  </div>
                </div>
                <div className="bg-amber-50 p-3 rounded-md border border-amber-200 text-sm">
                  <p className="font-medium text-amber-700 mb-1">AI Suggestion:</p>
                  <p className="text-amber-700">Employee recognition activity is high this week! This is an optimal time to request Glassdoor reviews.</p>
                </div>
                <div className="pt-4 flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setBoostReviewsOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-amber-500 hover:bg-amber-600">
                    Send Request
                  </Button>
                </div>
              </form>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <Tabs defaultValue="stories" className="space-y-4">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="stories" className="flex gap-1">
            <MessageSquare className="h-4 w-4" />
            <span className="hidden sm:inline">Employee Stories</span>
            <span className="inline sm:hidden">Stories</span>
          </TabsTrigger>
          <TabsTrigger value="reputation" className="flex gap-1">
            <Award className="h-4 w-4" />
            <span className="hidden sm:inline">Brand Reputation</span>
            <span className="inline sm:hidden">Reputation</span>
          </TabsTrigger>
          <TabsTrigger value="values" className="flex gap-1">
            <Heart className="h-4 w-4" />
            <span className="hidden sm:inline">Company Values</span>
            <span className="inline sm:hidden">Values</span>
          </TabsTrigger>
          <TabsTrigger value="assets" className="flex gap-1">
            <Image className="h-4 w-4" />
            <span className="hidden sm:inline">Brand Assets</span>
            <span className="inline sm:hidden">Assets</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="stories" className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-4 md:p-6">
            <div className="mb-4 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold text-blue-900">Employee Success Stories</h2>
                <p className="text-sm text-blue-700">Share and celebrate our cultural moments</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-700">
                <Users className="h-4 w-4" />
                <span>{employeeShares} employee shares</span>
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="/lovable-uploads/cb168787-e2fc-48fc-a29a-8c867a963c05.png" alt="Maya Rodriguez" />
                        <AvatarFallback>MR</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">Maya Rodriguez</CardTitle>
                        <CardDescription>Product Designer • 3 years</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-bucketlist-lightBlue text-bucketlist-blue">Featured</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-medium mb-2">Why I Love Working at Pato's Holding Corp.</h3>
                  <p className="text-muted-foreground mb-4">
                    "The collaborative culture here has helped me grow as a designer. I've had the opportunity to work on impactful projects with amazing colleagues who are always willing to share their knowledge."
                  </p>
                  <div className="bg-bucketlist-lightBlue/20 p-3 rounded-md border border-bucketlist-lightBlue">
                    <p className="text-sm font-medium text-bucketlist-blue">Career highlight:</p>
                    <p className="text-sm">Leading the design for our award-winning customer portal that increased user satisfaction by 35%.</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      142
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex gap-1">
                      <Linkedin className="h-4 w-4" />
                      <span className="hidden sm:inline">LinkedIn</span>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="mr-1 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="/lovable-uploads/fed439f3-6d57-4068-af61-3f0562732bd4.png" alt="John Doe" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">John Doe</CardTitle>
                        <CardDescription>Engineering Lead • 5 years</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-medium mb-2">Growing with Pato's Tech Team</h3>
                  <p className="text-muted-foreground mb-4">
                    "What started as a junior role has evolved into leading a team of brilliant engineers. The company's commitment to professional development and work-life balance has been instrumental in my growth."
                  </p>
                  <div className="bg-bucketlist-lightBlue/20 p-3 rounded-md border border-bucketlist-lightBlue">
                    <p className="text-sm font-medium text-bucketlist-blue">Favorite perk:</p>
                    <p className="text-sm">The learning stipend that allowed me to attend tech conferences and take specialized courses.</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      98
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex gap-1">
                      <Tiktok className="h-4 w-4" />
                      <span className="hidden sm:inline">TikTok</span>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="mr-1 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
            
            <div className="text-center mt-6">
              <Button variant="outline" className="bg-white">
                Load More Stories
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="reputation" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-gradient-to-br from-amber-50 to-white border-amber-100">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-amber-500" />
                      Glassdoor Rating
                    </CardTitle>
                    <CardDescription>Based on 187 reviews</CardDescription>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-amber-500">{glassdoorRating}</span>
                    <span className="text-sm text-amber-500">/5</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Culture & Values</span>
                      <span className="font-medium">4.5/5</span>
                    </div>
                    <Progress value={90} className="h-2 bg-amber-100" indicatorClassName="bg-amber-500" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Work/Life Balance</span>
                      <span className="font-medium">4.2/5</span>
                    </div>
                    <Progress value={84} className="h-2 bg-amber-100" indicatorClassName="bg-amber-500" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Career Opportunities</span>
                      <span className="font-medium">4.0/5</span>
                    </div>
                    <Progress value={80} className="h-2 bg-amber-100" indicatorClassName="bg-amber-500" />
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-white rounded-md border border-amber-200">
                  <p className="text-sm font-medium mb-1">Recent Review Highlight:</p>
                  <p className="text-sm italic">"Great company culture that values employee growth and work-life balance. Management is supportive and transparent."</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => window.open('https://www.glassdoor.com', '_blank')}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View on Glassdoor
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-blue-600" />
                      Comparably Rating
                    </CardTitle>
                    <CardDescription>Based on 142 reviews</CardDescription>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-blue-600">{comparablyRating}</span>
                    <span className="text-sm text-blue-600">/10</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Leadership</span>
                      <span className="font-medium">8.9/10</span>
                    </div>
                    <Progress value={89} className="h-2 bg-blue-100" indicatorClassName="bg-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Professional Development</span>
                      <span className="font-medium">8.5/10</span>
                    </div>
                    <Progress value={85} className="h-2 bg-blue-100" indicatorClassName="bg-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Compensation</span>
                      <span className="font-medium">8.2/10</span>
                    </div>
                    <Progress value={82} className="h-2 bg-blue-100" indicatorClassName="bg-blue-600" />
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white rounded-md border border-blue-200 flex flex-col items-center text-center">
                    <Award className="h-5 w-5 text-blue-600 mb-1" />
                    <p className="text-xs font-medium">Best Work-Life Balance</p>
                    <p className="text-xs text-muted-foreground">2023</p>
                  </div>
                  <div className="p-3 bg-white rounded-md border border-blue-200 flex flex-col items-center text-center">
                    <Award className="h-5 w-5 text-blue-600 mb-1" />
                    <p className="text-xs font-medium">Best Company Culture</p>
                    <p className="text-xs text-muted-foreground">2022</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => window.open('https://www.comparably.com', '_blank')}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View on Comparably
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Employer Awards & Certifications</CardTitle>
              <CardDescription>Recognitions that highlight our workplace culture</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 border rounded-lg flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-medium text-sm">Great Place to Work</h3>
                  <p className="text-xs text-muted-foreground">Certified 2023-2024</p>
                </div>
                
                <div className="p-4 border rounded-lg flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-sm">Top Workplaces</h3>
                  <p className="text-xs text-muted-foreground">Winner 2023</p>
                </div>
                
                <div className="p-4 border rounded-lg flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-medium text-sm">Best Places for Diversity</h3>
                  <p className="text-xs text-muted-foreground">Winner 2022</p>
                </div>
                
                <div className="p-4 border rounded-lg flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mb-2">
                    <Award className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-medium text-sm">Glassdoor Employees' Choice</h3>
                  <p className="text-xs text-muted-foreground">Top 50 in 2023</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="values" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-blue-100 rounded-full text-blue-700">
                    <Heart className="h-8 w-8" />
                  </div>
                </div>
                <CardTitle className="text-center">People First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  We believe our success starts with our team. We prioritize the well-being, growth, and fulfillment of our people above all else.
                </p>
              </CardContent>
              <CardFooter>
                <div className="w-full border-t pt-4">
                  <h4 className="text-sm font-medium mb-2">How we live this value:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Comprehensive wellness programs</li>
                    <li>• Career development pathways</li>
                    <li>• Regular feedback and recognition</li>
                  </ul>
                </div>
              </CardFooter>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-green-100 rounded-full text-green-700">
                    <Users className="h-8 w-8" />
                  </div>
                </div>
                <CardTitle className="text-center">Collaborative Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  We harness the power of teamwork to create innovative solutions. Great ideas can come from anywhere in our organization.
                </p>
              </CardContent>
              <CardFooter>
                <div className="w-full border-t pt-4">
                  <h4 className="text-sm font-medium mb-2">How we live this value:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Cross-functional project teams</li>
                    <li>• Innovation hackathons</li>
                    <li>• Open-door leadership policy</li>
                  </ul>
                </div>
              </CardFooter>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-purple-100 rounded-full text-purple-700">
                    <Award className="h-8 w-8" />
                  </div>
                </div>
                <CardTitle className="text-center">Excellence in Everything</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  We are committed to delivering exceptional quality in everything we do, from our products to our customer service.
                </p>
              </CardContent>
              <CardFooter>
                <div className="w-full border-t pt-4">
                  <h4 className="text-sm font-medium mb-2">How we live this value:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Rigorous quality standards</li>
                    <li>• Continuous improvement initiatives</li>
                    <li>• Customer feedback integration</li>
                  </ul>
                </div>
              </CardFooter>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Employee Value Proposition</CardTitle>
              <CardDescription>What makes our workplace unique</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border border-blue-100">
                <blockquote className="text-lg italic text-center text-blue-900 mb-4">
                  "At Pato's, we empower our team to innovate, grow, and make a meaningful impact in a collaborative and supportive environment."
                </blockquote>
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
                    <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg border border-blue-100">
                      <div className="p-2 bg-blue-100 rounded-full mb-2">
                        <Users className="h-5 w-5 text-blue-700" />
                      </div>
                      <h4 className="text-sm font-medium">Community</h4>
                      <p className="text-xs text-muted-foreground">Supportive team culture</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg border border-blue-100">
                      <div className="p-2 bg-green-100 rounded-full mb-2">
                        <Award className="h-5 w-5 text-green-700" />
                      </div>
                      <h4 className="text-sm font-medium">Growth</h4>
                      <p className="text-xs text-muted-foreground">Career development</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg border border-blue-100">
                      <div className="p-2 bg-purple-100 rounded-full mb-2">
                        <Heart className="h-5 w-5 text-purple-700" />
                      </div>
                      <h4 className="text-sm font-medium">Balance</h4>
                      <p className="text-xs text-muted-foreground">Work-life harmony</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg border border-blue-100">
                      <div className="p-2 bg-amber-100 rounded-full mb-2">
                        <Flag className="h-5 w-5 text-amber-700" />
                      </div>
                      <h4 className="text-sm font-medium">Purpose</h4>
                      <p className="text-xs text-muted-foreground">Meaningful impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="assets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Brand Assets</CardTitle>
              <CardDescription>Access and download official company branding materials</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="border rounded-lg p-4 flex flex-col items-center gap-2">
                  <div className="h-24 w-24 bg-beekeeper-yellow rounded-full flex items-center justify-center mb-2">
                    <span className="text-3xl font-bold text-beekeeper-black">P</span>
                  </div>
                  <h3 className="font-medium">Company Logo</h3>
                  <Button variant="outline" size="sm">
                    <Download className="mr-1 h-4 w-4" />
                    Download
                  </Button>
                </div>
                
                <div className="border rounded-lg p-4 flex flex-col items-center gap-2">
                  <div className="h-24 w-full bg-gradient-to-r from-bucketlist-blue to-bucketlist-indigo rounded-lg flex items-center justify-center mb-2">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-medium">Brand Colors</h3>
                  <Button variant="outline" size="sm">
                    <Download className="mr-1 h-4 w-4" />
                    Download
                  </Button>
                </div>
                
                <div className="border rounded-lg p-4 flex flex-col items-center gap-2">
                  <div className="h-24 w-full bg-gray-100 rounded-lg flex items-center justify-center mb-2 font-serif">
                    <span className="text-2xl font-medium">Aa Bb Cc</span>
                  </div>
                  <h3 className="font-medium">Brand Typography</h3>
                  <Button variant="outline" size="sm">
                    <Download className="mr-1 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium mb-3">Social Media Templates</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-32 bg-gray-100"></div>
                    <div className="p-3">
                      <p className="font-medium">LinkedIn Header</p>
                      <p className="text-sm text-muted-foreground">1584 x 396 px</p>
                      <Button variant="ghost" size="sm" className="w-full mt-2">
                        <Download className="mr-1 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-32 bg-gray-100"></div>
                    <div className="p-3">
                      <p className="font-medium">Twitter Banner</p>
                      <p className="text-sm text-muted-foreground">1500 x 500 px</p>
                      <Button variant="ghost" size="sm" className="w-full mt-2">
                        <Download className="mr-1 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-32 bg-gray-100"></div>
                    <div className="p-3">
                      <p className="font-medium">Instagram Post</p>
                      <p className="text-sm text-muted-foreground">1080 x 1080 px</p>
                      <Button variant="ghost" size="sm" className="w-full mt-2">
                        <Download className="mr-1 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Employer Branding Materials</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border rounded-lg p-4 flex items-center gap-3">
                    <div className="h-14 w-14 flex-shrink-0 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Image className="h-6 w-6 text-blue-700" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Company Culture Slide Deck</h4>
                      <p className="text-sm text-muted-foreground mb-2">For new employee onboarding and recruitment</p>
                      <Button variant="outline" size="sm">
                        <Download className="mr-1 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 flex items-center gap-3">
                    <div className="h-14 w-14 flex-shrink-0 bg-green-100 rounded-lg flex items-center justify-center">
                      <Image className="h-6 w-6 text-green-700" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Employee Benefits Guide</h4>
                      <p className="text-sm text-muted-foreground mb-2">Comprehensive overview of company benefits</p>
                      <Button variant="outline" size="sm">
                        <Download className="mr-1 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="fixed bottom-6 right-6 z-10">
        <div className="flex flex-col gap-2">
          <Button 
            size="sm" 
            className="flex gap-2 bg-gradient-to-r from-bucketlist-blue to-bucketlist-indigo shadow-lg"
            onClick={() => setShareStoryOpen(true)}
          >
            <Upload className="h-4 w-4" />
            Share Your Story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmployerBranding;
