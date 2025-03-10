
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RecognitionFeed } from '@/components/RecognitionFeed';

const Feed: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Recognition Feed</h1>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle>Team Recognitions</CardTitle>
            <div className="flex gap-2">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Recognitions</SelectItem>
                  <SelectItem value="received">Received</SelectItem>
                  <SelectItem value="sent">Sent</SelectItem>
                  <SelectItem value="department">My Department</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="innovation">Innovation</TabsTrigger>
              <TabsTrigger value="teamwork">Teamwork</TabsTrigger>
              <TabsTrigger value="excellence">Excellence</TabsTrigger>
              <TabsTrigger value="customer">Customer Focus</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <RecognitionFeed filter={filter} />
            </TabsContent>
            <TabsContent value="innovation">
              <RecognitionFeed filter={filter} valueFilter="innovation" />
            </TabsContent>
            <TabsContent value="teamwork">
              <RecognitionFeed filter={filter} valueFilter="teamwork" />
            </TabsContent>
            <TabsContent value="excellence">
              <RecognitionFeed filter={filter} valueFilter="excellence" />
            </TabsContent>
            <TabsContent value="customer">
              <RecognitionFeed filter={filter} valueFilter="customer" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Feed;
