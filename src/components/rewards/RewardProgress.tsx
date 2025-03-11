
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const RewardProgress = () => {
  return (
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
  );
};

export default RewardProgress;
