
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import RewardCard from './RewardCard';

interface GiftCardRewardsProps {
  availablePoints: number;
}

const GiftCardRewards = ({ availablePoints }: GiftCardRewardsProps) => {
  // Array of gift card rewards
  const giftCards = [
    {
      title: "$50 Amazon Gift Card",
      description: "Shop for anything your heart desires from the world's largest online retailer",
      image: "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Amazon gift card",
      points: 1000
    },
    {
      title: "$25 Starbucks Gift Card",
      description: "Enjoy premium coffee and snacks at your favorite cafe",
      image: "https://images.unsplash.com/photo-1550650662-78e2a0ed7f68?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Starbucks gift card",
      points: 500
    },
    {
      title: "$50 Netflix Gift Card",
      description: "Stream your favorite shows and movies for months",
      image: "https://images.unsplash.com/photo-1649773781416-1f29166cd2e3?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Netflix gift card",
      points: 1000
    },
    {
      title: "$25 Spotify Gift Card",
      description: "Listen to unlimited music with premium features",
      image: "https://images.unsplash.com/photo-1627873649417-c67f701f68aa?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Spotify gift card",
      points: 500
    },
    {
      title: "$100 Apple Gift Card",
      description: "Purchase apps, games, music, and more from the Apple ecosystem",
      image: "https://images.unsplash.com/photo-1598764557991-b9f131dd809e?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Apple gift card",
      points: 2000
    },
    {
      title: "$50 Steam Gift Card",
      description: "Expand your game library with the latest titles",
      image: "https://images.unsplash.com/photo-1640301133815-4bec2d5befa3?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Steam gift card",
      points: 1000
    },
    {
      title: "$25 PlayStation Gift Card",
      description: "Get new games, DLC, and in-game items for your PlayStation",
      image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&q=80&w=800",
      imageAlt: "PlayStation gift card",
      points: 500
    },
    {
      title: "$25 Xbox Gift Card",
      description: "Unlock games and entertainment on your Xbox console",
      image: "https://images.unsplash.com/photo-1621455805431-441ca621da25?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Xbox gift card",
      points: 500
    },
    {
      title: "$50 Nintendo Gift Card",
      description: "Download games and content for your Nintendo Switch",
      image: "https://images.unsplash.com/photo-1560338860-4cbf5ae71500?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Nintendo gift card",
      points: 1000
    },
    {
      title: "$25 Uber Eats Gift Card",
      description: "Get your favorite food delivered to your door",
      image: "https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Uber Eats gift card",
      points: 500
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
