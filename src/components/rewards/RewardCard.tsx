
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface RewardCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  points: number;
  availablePoints: number;
}

const RewardCard = ({ title, description, image, imageAlt, points, availablePoints }: RewardCardProps) => {
  const canRedeem = availablePoints >= points;

  return (
    <Card className="hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="w-full h-40 bg-muted rounded-md overflow-hidden">
          <img 
            src={image}
            alt={imageAlt} 
            className="w-full h-full object-cover"
          />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="mt-2">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-0">
        <div className="font-bold text-bucketlist-blue">{points} Points</div>
        {canRedeem ? (
          <Button>Redeem</Button>
        ) : (
          <Button variant="outline">Need More Points</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default RewardCard;
