import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Gift, Coffee, ShoppingBag, Ticket, Trophy } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Rewards: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Rewards Catalog</h1>
        <div className="flex items-center gap-2 bg-beekeeper-light rounded-lg px-4 py-2">
          <span className="text-sm font-medium">Available Points:</span>
          <span className="text-xl font-bold text-bucketlist-blue">450</span>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Reward Progress</CardTitle>
          <CardDescription>
            You're making great progress toward your rewards goals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Company Swag Bundle</span>
                <span className="text-sm font-medium">450/500</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">$50 Amazon Gift Card</span>
                <span className="text-sm font-medium">450/1000</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Extra Day Off</span>
                <span className="text-sm font-medium">450/2000</span>
              </div>
              <Progress value={22.5} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="popular">
        <TabsList className="mb-4">
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="experiences">Experiences</TabsTrigger>
          <TabsTrigger value="items">Items</TabsTrigger>
          <TabsTrigger value="gift-cards">Gift Cards</TabsTrigger>
        </TabsList>
        
        <TabsContent value="popular" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800"
                    alt="Coffee shop gift card" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">$25 Coffee Shop Gift Card</CardTitle>
                <CardDescription className="mt-2">
                  Treat yourself to your favorite beverage and snack
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">500 Points</div>
                <Button>Redeem</Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&q=80&w=800"
                    alt="Company swag bundle" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">Company Swag Bundle</CardTitle>
                <CardDescription className="mt-2">
                  T-shirt, water bottle, and notebook with company logo
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">500 Points</div>
                <Button>Redeem</Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800"
                    alt="Movie tickets" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">Movie Tickets (Pair)</CardTitle>
                <CardDescription className="mt-2">
                  Enjoy a movie night with a friend or family member
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">750 Points</div>
                <Button variant="outline">Need More Points</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="experiences" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&w=800"
                    alt="Wildlife sanctuary visit" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">Wildlife Sanctuary Visit</CardTitle>
                <CardDescription className="mt-2">
                  Enjoy a day at the local wildlife sanctuary with a plus one
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">1200 Points</div>
                <Button variant="outline">Need More Points</Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800"
                    alt="Spa day" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">Luxury Spa Day</CardTitle>
                <CardDescription className="mt-2">
                  Relax and rejuvenate with a full day of pampering at a premium spa
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">1500 Points</div>
                <Button variant="outline">Need More Points</Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
                    alt="Cooking class" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">Cooking Masterclass</CardTitle>
                <CardDescription className="mt-2">
                  Learn culinary secrets from professional chefs in this hands-on experience
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">1000 Points</div>
                <Button variant="outline">Need More Points</Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80&w=800"
                    alt="Safari adventure" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">Safari Adventure</CardTitle>
                <CardDescription className="mt-2">
                  Experience an unforgettable guided safari tour at a renowned nature reserve
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">2500 Points</div>
                <Button variant="outline">Need More Points</Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=800"
                    alt="Mountain hiking" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">Mountain Hiking Expedition</CardTitle>
                <CardDescription className="mt-2">
                  Challenge yourself with a guided hiking trip through scenic mountain trails
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">1800 Points</div>
                <Button variant="outline">Need More Points</Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&q=80&w=800"
                    alt="Forest retreat" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">Forest Retreat Weekend</CardTitle>
                <CardDescription className="mt-2">
                  Escape to a peaceful cabin in the woods for a weekend of relaxation and nature
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">2200 Points</div>
                <Button variant="outline">Need More Points</Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1438565434616-3ef039228b15?auto=format&fit=crop&q=80&w=800"
                    alt="Rock climbing" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">Rock Climbing Adventure</CardTitle>
                <CardDescription className="mt-2">
                  Test your limits with a full day of rock climbing with professional instructors
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">1600 Points</div>
                <Button variant="outline">Need More Points</Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80&w=800"
                    alt="Desert tour" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">Desert Camel Tour</CardTitle>
                <CardDescription className="mt-2">
                  Embark on an unforgettable desert adventure with a guided camel ride tour
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">1700 Points</div>
                <Button variant="outline">Need More Points</Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&q=80&w=800"
                    alt="Horseback riding" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">Horseback Riding Lesson</CardTitle>
                <CardDescription className="mt-2">
                  Learn horseback riding fundamentals with expert trainers in a scenic countryside
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">900 Points</div>
                <Button variant="outline">Need More Points</Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&q=80&w=800"
                    alt="Reptile park" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">Exotic Reptile Experience</CardTitle>
                <CardDescription className="mt-2">
                  Get up close with fascinating reptiles in this guided educational tour
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">800 Points</div>
                <Button variant="outline">Need More Points</Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1501286353178-1ec881214838?auto=format&fit=crop&q=80&w=800"
                    alt="Primate sanctuary" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">Primate Sanctuary Tour</CardTitle>
                <CardDescription className="mt-2">
                  Visit a sanctuary dedicated to rescued primates and learn about conservation
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">1100 Points</div>
                <Button variant="outline">Need More Points</Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1501901609772-df0fd2994642?auto=format&fit=crop&q=80&w=800"
                    alt="Farm experience" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">Organic Farm Experience</CardTitle>
                <CardDescription className="mt-2">
                  Spend a day at an organic farm learning sustainable practices and harvesting food
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">750 Points</div>
                <Button variant="outline">Need More Points</Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1501901609772-df0fd2994642?auto=format&fit=crop&q=80&w=800"
                    alt="Hot air balloon" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">Hot Air Balloon Ride</CardTitle>
                <CardDescription className="mt-2">
                  Soar above stunning landscapes in a magical hot air balloon adventure
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">2800 Points</div>
                <Button variant="outline">Need More Points</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="items">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=800"
                    alt="Premium headphones" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">Premium Headphones</CardTitle>
                <CardDescription className="mt-2">
                  High-quality wireless headphones for an immersive audio experience
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">2000 Points</div>
                <Button variant="outline">Need More Points</Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800"
                    alt="Fitness watch" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">Smart Fitness Watch</CardTitle>
                <CardDescription className="mt-2">
                  Track your health and stay connected with this advanced smartwatch
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">1800 Points</div>
                <Button variant="outline">Need More Points</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="gift-cards">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=80&w=800"
                    alt="Amazon gift card" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">$50 Amazon Gift Card</CardTitle>
                <CardDescription className="mt-2">
                  Shop from millions of items on Amazon
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">1000 Points</div>
                <Button variant="outline">Need More Points</Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800"
                    alt="Target gift card" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">$25 Target Gift Card</CardTitle>
                <CardDescription className="mt-2">
                  Get everything you need from your favorite retail store
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">500 Points</div>
                <Button>Redeem</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Rewards;
