
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Award, Building, Download, Flag, Heart, Share2, ThumbsUp, Upload, Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const EmployerBranding: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Employer Branding</h1>
          <p className="text-muted-foreground">Showcase and strengthen our company culture</p>
        </div>
        <Button className="bg-bucketlist-blue hover:bg-bucketlist-indigo">
          <Upload className="mr-2 h-4 w-4" />
          Share Your Story
        </Button>
      </div>

      <Tabs defaultValue="stories" className="space-y-4">
        <TabsList>
          <TabsTrigger value="stories">Employee Stories</TabsTrigger>
          <TabsTrigger value="values">Company Values</TabsTrigger>
          <TabsTrigger value="assets">Brand Assets</TabsTrigger>
        </TabsList>
        
        <TabsContent value="stories" className="space-y-4">
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
                <Button variant="outline" size="sm">
                  <Share2 className="mr-1 h-4 w-4" />
                  Share
                </Button>
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
                <Button variant="outline" size="sm">
                  <Share2 className="mr-1 h-4 w-4" />
                  Share
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="text-center mt-4">
            <Button variant="outline">
              Load More Stories
            </Button>
          </div>
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
                  <Button variant="outline" size="sm">Download</Button>
                </div>
                
                <div className="border rounded-lg p-4 flex flex-col items-center gap-2">
                  <div className="h-24 w-full bg-gradient-to-r from-bucketlist-blue to-bucketlist-indigo rounded-lg flex items-center justify-center mb-2">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-medium">Brand Colors</h3>
                  <Button variant="outline" size="sm">Download</Button>
                </div>
                
                <div className="border rounded-lg p-4 flex flex-col items-center gap-2">
                  <div className="h-24 w-full bg-gray-100 rounded-lg flex items-center justify-center mb-2 font-serif">
                    <span className="text-2xl font-medium">Aa Bb Cc</span>
                  </div>
                  <h3 className="font-medium">Brand Typography</h3>
                  <Button variant="outline" size="sm">Download</Button>
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
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EmployerBranding;
