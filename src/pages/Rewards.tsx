
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Gift, Coffee, ShoppingBag, Ticket } from 'lucide-react';
import RewardProgress from '@/components/rewards/RewardProgress';
import PopularRewards from '@/components/rewards/PopularRewards';
import ExperienceRewards from '@/components/rewards/ExperienceRewards';
import ItemRewards from '@/components/rewards/ItemRewards';
import GiftCardRewards from '@/components/rewards/GiftCardRewards';

const Rewards = () => {
  // In a real app, this would come from state/API
  const availablePoints = 450;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Rewards Catalog</h1>
        <div className="flex items-center gap-2 bg-beekeeper-light rounded-lg px-4 py-2">
          <span className="text-sm font-medium">Available Points:</span>
          <span className="text-xl font-bold text-bucketlist-blue">{availablePoints}</span>
        </div>
      </div>
      
      <RewardProgress />
      
      <Tabs defaultValue="popular">
        <TabsList className="mb-4">
          <TabsTrigger value="popular" className="flex items-center gap-2">
            <Gift className="h-4 w-4" />
            <span>Popular</span>
          </TabsTrigger>
          <TabsTrigger value="experiences" className="flex items-center gap-2">
            <Ticket className="h-4 w-4" />
            <span>Experiences</span>
          </TabsTrigger>
          <TabsTrigger value="items" className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            <span>Items</span>
          </TabsTrigger>
          <TabsTrigger value="gift-cards" className="flex items-center gap-2">
            <Coffee className="h-4 w-4" />
            <span>Gift Cards</span>
          </TabsTrigger>
        </TabsList>
        
        <PopularRewards availablePoints={availablePoints} />
        <ExperienceRewards availablePoints={availablePoints} />
        <ItemRewards availablePoints={availablePoints} />
        <GiftCardRewards availablePoints={availablePoints} />
      </Tabs>
    </div>
  );
};

export default Rewards;
