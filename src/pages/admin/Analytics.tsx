
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, LineChart, PieChart } from '@/components/ui/charts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, Cake, Gift, TrendingUp, Users } from 'lucide-react';

const Analytics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("activity");
  
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
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 mb-8">
          <TabsTrigger value="activity">Recognition & Activity</TabsTrigger>
          <TabsTrigger value="roi">ROI & Platform Features</TabsTrigger>
        </TabsList>
        
        <TabsContent value="activity">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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
          
          {/* Recognition Trends */}
          <Card className="mb-6">
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
          
          {/* Key Events Tracking */}
          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Key Events & Milestones</CardTitle>
                <CardDescription>
                  Upcoming birthdays, anniversaries and achievements
                </CardDescription>
              </div>
              <div className="flex space-x-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <Cake className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="thisWeek">
                <TabsList className="mb-4">
                  <TabsTrigger value="thisWeek">This Week</TabsTrigger>
                  <TabsTrigger value="thisMonth">This Month</TabsTrigger>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                </TabsList>
                
                <TabsContent value="thisWeek">
                  <div className="space-y-4">
                    {[
                      { type: 'Birthday', name: 'Sarah Johnson', department: 'Marketing', date: 'Today', years: null },
                      { type: 'Work Anniversary', name: 'Michael Chen', department: 'Engineering', date: 'Tomorrow', years: 5 },
                      { type: 'Birthday', name: 'David Rodriguez', department: 'Sales', date: 'Wednesday', years: null },
                      { type: 'Work Anniversary', name: 'Emma Wilson', department: 'Customer Success', date: 'Friday', years: 3 },
                    ].map((event, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex gap-3 items-center">
                          {event.type === 'Birthday' ? (
                            <Cake className="h-8 w-8 p-1.5 rounded-full bg-pink-100 text-pink-500" />
                          ) : (
                            <Award className="h-8 w-8 p-1.5 rounded-full bg-purple-100 text-purple-500" />
                          )}
                          <div>
                            <p className="font-medium">{event.name}</p>
                            <p className="text-sm text-muted-foreground">{event.department}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-sm">{event.date}</p>
                          <p className="text-sm text-muted-foreground">
                            {event.type === 'Birthday' ? 'Birthday' : `${event.years} Year${event.years !== 1 ? 's' : ''}`}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="thisMonth">
                  <div className="space-y-4">
                    {[
                      { type: 'Birthday', name: 'Jessica Lee', department: 'Design', date: 'June 15', years: null },
                      { type: 'Work Anniversary', name: 'Robert Taylor', department: 'Finance', date: 'June 18', years: 10 },
                      { type: 'Birthday', name: 'Lisa Wang', department: 'Product', date: 'June 22', years: null },
                      { type: 'Work Anniversary', name: 'James Miller', department: 'Engineering', date: 'June 25', years: 2 },
                      { type: 'Birthday', name: 'Maria Garcia', department: 'HR', date: 'June 28', years: null },
                    ].map((event, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex gap-3 items-center">
                          {event.type === 'Birthday' ? (
                            <Cake className="h-8 w-8 p-1.5 rounded-full bg-pink-100 text-pink-500" />
                          ) : (
                            <Award className="h-8 w-8 p-1.5 rounded-full bg-purple-100 text-purple-500" />
                          )}
                          <div>
                            <p className="font-medium">{event.name}</p>
                            <p className="text-sm text-muted-foreground">{event.department}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-sm">{event.date}</p>
                          <p className="text-sm text-muted-foreground">
                            {event.type === 'Birthday' ? 'Birthday' : `${event.years} Year${event.years !== 1 ? 's' : ''}`}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="upcoming">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center gap-2">
                          <Cake className="h-4 w-4" />
                          Upcoming Birthdays
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">12</div>
                        <div className="text-xs text-muted-foreground mt-1">In the next 30 days</div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          Work Anniversaries
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">8</div>
                        <div className="text-xs text-muted-foreground mt-1">In the next 30 days</div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          {/* Department Distribution */}
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
        </TabsContent>
        
        <TabsContent value="roi">
          {/* ROI Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  ROI Factor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3.7x</div>
                <div className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-500">↑ 0.3x</span> from last year
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Retention Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">+24%</div>
                <div className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-500">↑ 4%</span> from last year
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Gift className="h-4 w-4" />
                  Program Adoption
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">92%</div>
                <div className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-500">↑ 8%</span> from last year
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* ROI Dashboard */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>ROI Dashboard</CardTitle>
              <CardDescription>
                Platform performance and engagement metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-2">Feature Impact Analysis</h3>
                    <div className="grid gap-3">
                      {[
                        { feature: 'P2P Recognition', status: 'On', insight: 'Increased engagement by 35% and is used by 80% of top-performing organizations', color: 'green' },
                        { feature: 'Awards Programs', status: 'monthly', insight: '50% higher participation rate, and employees are 2x more likely to feel valued', color: 'green' },
                        { feature: 'Leaderboard', status: 'Off', insight: 'Would increase platform engagement by 50% based on industry data', color: 'red' },
                        { feature: 'Marketplace Integration', status: 'Off', insight: 'Would increase platform usage by 15% according to benchmarks', color: 'red' },
                        { feature: 'Quarterly Point Reset', status: 'Off', insight: 'Would drive 20% increase in active participation compared to annual resets', color: 'red' },
                        { feature: 'Social Comments', status: 'Off', insight: 'Would increase recognition-related interactions by 25-30% and overall engagement by 15%', color: 'red' },
                        { feature: 'Rich Media (GIFs)', status: 'Off', insight: 'Content with rich media is 60% more likely to be interacted with, particularly among employees under 35', color: 'red' },
                        { feature: 'Mobile App Integration', status: 'Off', insight: 'Organizations with mobile recognition see 35% higher engagement rates', color: 'red' },
                      ].map((item) => (
                        <div key={item.feature} className="flex items-start gap-4 p-4 border rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold">{item.feature}</h4>
                              <Badge variant={item.status === 'On' || item.status === 'monthly' ? 'default' : 'secondary'}>
                                {item.status}
                              </Badge>
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground">{item.insight}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-2">ROI Since Deployment</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-4xl font-bold">7x</CardTitle>
                          <CardDescription>More likely to be engaged</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">Manager Impact</p>
                          <p className="mt-2 font-medium text-lg">84% Less likely to look for another job this year</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-4xl font-bold">5x</CardTitle>
                          <CardDescription>More likely to be engaged</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">Employee Impact</p>
                          <p className="mt-2 font-medium text-lg">75% Less likely to look for another job this year</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-4xl font-bold">$380K</CardTitle>
                          <CardDescription>Estimated Annual Savings</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Reduced Turnover</span>
                              <span className="font-medium">$240K</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Increased Productivity</span>
                              <span className="font-medium">$95K</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Lower Absenteeism</span>
                              <span className="font-medium">$45K</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Program Impact Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Program Impact Analysis</CardTitle>
              <CardDescription>
                Performance benchmarks and industry comparison
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="engagement">
                <TabsList className="mb-4">
                  <TabsTrigger value="engagement">Engagement</TabsTrigger>
                  <TabsTrigger value="retention">Retention</TabsTrigger>
                  <TabsTrigger value="productivity">Productivity</TabsTrigger>
                </TabsList>
                
                <TabsContent value="engagement">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Engagement Metrics</h3>
                      <div className="h-60">
                        <LineChart
                          data={[
                            { name: 'Q1', value: 65, industry: 52 },
                            { name: 'Q2', value: 72, industry: 54 },
                            { name: 'Q3', value: 78, industry: 56 },
                            { name: 'Q4', value: 85, industry: 58 },
                          ]}
                          categories={['value', 'industry']}
                          colors={['#3B82F6', '#D1D5DB']}
                          yAxisWidth={50}
                          showLegend={true}
                        />
                      </div>
                      <div className="flex justify-center gap-8 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span>Your Company</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                          <span>Industry Average</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">Pulse Survey Results</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm">
                                <span>I feel valued at work</span>
                                <span className="font-medium">87%</span>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                                <div className="h-2 bg-green-500 rounded-full" style={{ width: "87%" }}></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-sm">
                                <span>I receive regular recognition</span>
                                <span className="font-medium">82%</span>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                                <div className="h-2 bg-green-500 rounded-full" style={{ width: "82%" }}></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-sm">
                                <span>Recognition is meaningful</span>
                                <span className="font-medium">91%</span>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                                <div className="h-2 bg-green-500 rounded-full" style={{ width: "91%" }}></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-sm">
                                <span>I feel connected to our values</span>
                                <span className="font-medium">85%</span>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                                <div className="h-2 bg-green-500 rounded-full" style={{ width: "85%" }}></div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="retention">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="h-60">
                      <LineChart
                        data={[
                          { name: '2020', value: 16, industry: 22 },
                          { name: '2021', value: 14, industry: 21 },
                          { name: '2022', value: 12, industry: 19 },
                          { name: '2023', value: 9, industry: 18 },
                        ]}
                        categories={['value', 'industry']}
                        colors={['#10B981', '#D1D5DB']}
                        yAxisWidth={50}
                        showLegend={true}
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Turnover Rate (%)</h3>
                      <p className="text-sm text-muted-foreground">
                        Your organization's turnover rate has decreased by 44% since implementing the recognition program, 
                        significantly outperforming the industry average reduction of 18% during the same period.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="p-4 border rounded-md">
                          <div className="text-2xl font-bold text-green-500">-44%</div>
                          <div className="text-sm text-muted-foreground">Your Improvement</div>
                        </div>
                        <div className="p-4 border rounded-md">
                          <div className="text-2xl font-bold text-gray-500">-18%</div>
                          <div className="text-sm text-muted-foreground">Industry Average</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="productivity">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Productivity Metrics</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Employee Engagement</span>
                            <span className="text-sm font-medium">+22%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-blue-500 rounded-full" style={{ width: "72%" }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Work Quality</span>
                            <span className="text-sm font-medium">+18%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-blue-500 rounded-full" style={{ width: "68%" }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Project Completion</span>
                            <span className="text-sm font-medium">+15%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-blue-500 rounded-full" style={{ width: "65%" }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Team Collaboration</span>
                            <span className="text-sm font-medium">+28%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-blue-500 rounded-full" style={{ width: "78%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-sm font-medium">Productivity Impact</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold mb-4">+19.5%</div>
                          <p className="text-sm text-muted-foreground mb-4">
                            Average productivity increase across all measured metrics since implementing the recognition program.
                          </p>
                          
                          <div className="space-y-3 mt-4">
                            <div className="flex justify-between text-sm">
                              <span>High Recognition Teams</span>
                              <span className="font-medium text-green-500">+24.2%</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Medium Recognition Teams</span>
                              <span className="font-medium text-blue-500">+18.7%</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Low Recognition Teams</span>
                              <span className="font-medium text-amber-500">+10.3%</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
