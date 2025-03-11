
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import RewardCard from './RewardCard';
import { Gift } from 'lucide-react';

interface GiftCardRewardsProps {
  availablePoints: number;
}

const GiftCardRewards = ({ availablePoints }: GiftCardRewardsProps) => {
  // Array of gift card rewards
  const giftCards = [
    {
      title: "$50 Amazon Gift Card",
      description: "Shop for anything your heart desires from the world's largest online retailer",
      image: "https://images.unsplash.com/photo-1620687907459-b78d68b61517?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Amazon gift card",
      points: 1000
    },
    {
      title: "$25 Starbucks Gift Card",
      description: "Enjoy premium coffee and snacks at your favorite cafe",
      image: "https://images.unsplash.com/photo-1543661975-42d2b5d61924?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Starbucks gift card",
      points: 500
    },
    {
      title: "$50 Netflix Gift Card",
      description: "Stream your favorite shows and movies for months",
      image: "https://images.unsplash.com/photo-1522869635100-187f6605151d?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Netflix gift card",
      points: 1000
    },
    {
      title: "$25 Spotify Gift Card",
      description: "Listen to unlimited music with premium features",
      image: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Spotify gift card",
      points: 500
    },
    {
      title: "$100 Apple Gift Card",
      description: "Purchase apps, games, music, and more from the Apple ecosystem",
      image: "https://images.unsplash.com/photo-1578345218286-2be6fff017fa?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Apple gift card",
      points: 2000
    },
    {
      title: "$50 Steam Gift Card",
      description: "Expand your game library with the latest titles",
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Steam gift card",
      points: 1000
    }
  ];

  return (
    <TabsContent value="gift-cards" className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {giftCards.map((giftCard, index) => (
          <RewardCard 
            key={`gift-card-${index}`}
            title={giftCard.title}
            description={giftCard.description}
            image={giftCard.image}
            imageAlt={giftCard.imageAlt}
            points={giftCard.points}
            availablePoints={availablePoints}
          />
        ))}
      </div>
    </TabsContent>
  );
};

export default GiftCardRewards;
