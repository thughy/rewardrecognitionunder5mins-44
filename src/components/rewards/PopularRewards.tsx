
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import RewardCard from './RewardCard';

interface PopularRewardsProps {
  availablePoints: number;
}

const PopularRewards = ({ availablePoints }: PopularRewardsProps) => {
  return (
    <TabsContent value="popular" className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <RewardCard 
          title="$25 Coffee Shop Gift Card"
          description="Treat yourself to your favorite beverage and snack"
          image="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800"
          imageAlt="Coffee shop gift card"
          points={500}
          availablePoints={availablePoints}
        />
        
        <RewardCard 
          title="Company Swag Bundle"
          description="T-shirt, water bottle, and notebook with company logo"
          image="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&q=80&w=800"
          imageAlt="Company swag bundle"
          points={500}
          availablePoints={availablePoints}
        />
        
        <RewardCard 
          title="Movie Tickets (Pair)"
          description="Enjoy a movie night with a friend or family member"
          image="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800"
          imageAlt="Movie tickets"
          points={750}
          availablePoints={availablePoints}
        />
      </div>
    </TabsContent>
  );
};

export default PopularRewards;
