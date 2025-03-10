
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, LineChart, PieChart } from '@/components/ui/chart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Analytics: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Analytics Dashboard</h1>
        <div className="flex gap-2">
          <Select defaultValue="quarter">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Recognitions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,248</div>
            <div className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">↑ 12%</span> from last quarter
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">87%</div>
            <div className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">↑ 5%</span> from last quarter
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Points Redeemed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24,580</div>
            <div className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">↑ 18%</span> from last quarter
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recognition Trends</CardTitle>
          <CardDescription>
            Overview of recognition activity over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="recognitions">
            <TabsList className="mb-4">
              <TabsTrigger value="recognitions">Recognitions</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
              <TabsTrigger value="redemptions">Redemptions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="recognitions">
              <div className="h-80">
                <LineChart
                  data={[
                    { name: 'Jan', value: 100 },
                    { name: 'Feb', value: 120 },
                    { name: 'Mar', value: 170 },
                    { name: 'Apr', value: 180 },
                    { name: 'May', value: 210 },
                    { name: 'Jun', value: 240 },
                    { name: 'Jul', value: 280 },
                    { name: 'Aug', value: 260 },
                    { name: 'Sep', value: 300 },
                    { name: 'Oct', value: 340 },
                    { name: 'Nov', value: 380 },
                    { name: 'Dec', value: 410 },
                  ]}
                  categories={['value']}
                  colors={['#3B82F6']}
                  yAxisWidth={50}
                  showLegend={false}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="engagement">
              <div className="h-80">
                <BarChart
                  data={[
                    { name: 'Engineering', value: 84 },
                    { name: 'Sales', value: 92 },
                    { name: 'Marketing', value: 89 },
                    { name: 'Support', value: 78 },
                    { name: 'HR', value: 95 },
                    { name: 'Operations', value: 82 },
                  ]}
                  categories={['value']}
                  colors={['#3B82F6']}
                  yAxisWidth={50}
                  showLegend={false}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="redemptions">
              <div className="h-80 flex items-center justify-center">
                <PieChart
                  data={[
                    { name: 'Gift Cards', value: 45 },
                    { name: 'Company Swag', value: 20 },
                    { name: 'Experiences', value: 15 },
                    { name: 'Charitable Donations', value: 10 },
                    { name: 'Other', value: 10 },
                  ]}
                  colors={['#3B82F6', '#FFCE00', '#4F46E5', '#10B981', '#F97316']}
                />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Values Recognized</CardTitle>
            <CardDescription>
              Most frequently recognized company values
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-60">
              <BarChart
                data={[
                  { name: 'Teamwork', value: 35 },
                  { name: 'Excellence', value: 27 },
                  { name: 'Innovation', value: 22 },
                  { name: 'Customer Focus', value: 16 },
                ]}
                categories={['value']}
                colors={['#FFCE00']}
                layout="horizontal"
                showLegend={false}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recognition By Department</CardTitle>
            <CardDescription>
              Distribution of recognition activity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-60 flex items-center justify-center">
              <PieChart
                data={[
                  { name: 'Engineering', value: 30 },
                  { name: 'Sales', value: 25 },
                  { name: 'Marketing', value: 15 },
                  { name: 'Support', value: 18 },
                  { name: 'Other', value: 12 },
                ]}
                colors={['#3B82F6', '#FFCE00', '#4F46E5', '#10B981', '#F97316']}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
