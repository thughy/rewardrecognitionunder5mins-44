
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
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=800" 
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
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=800" 
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
                    src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80&w=800" 
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
        
        <TabsContent value="experiences">
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
            
            <Card className="hover:shadow-md transition-shadow duration-300 opacity-60">
              <CardHeader className="pb-2">
                <div className="w-full h-40 bg-muted rounded-md flex items-center justify-center">
                  <Trophy className="h-12 w-12 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">More Experiences Coming Soon</CardTitle>
                <CardDescription className="mt-2">
                  Check back for exciting new experiences you can redeem
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <div className="font-bold text-bucketlist-blue">??? Points</div>
                <Button variant="outline" disabled>Coming Soon</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="items">
          <div className="text-center py-12 text-muted-foreground">
            <Gift className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">More Items Coming Soon!</h3>
            <p>Check back for exciting new items you can redeem with your points.</p>
          </div>
        </TabsContent>
        
        <TabsContent value="gift-cards">
          <div className="text-center py-12 text-muted-foreground">
            <ShoppingBag className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">More Gift Cards Coming Soon!</h3>
            <p>Check back for exciting new gift cards you can redeem with your points.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Rewards;
