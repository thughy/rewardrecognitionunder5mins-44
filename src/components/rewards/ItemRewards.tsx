
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import RewardCard from './RewardCard';

interface ItemRewardsProps {
  availablePoints: number;
}

const ItemRewards = ({ availablePoints }: ItemRewardsProps) => {
  // Array of item rewards
  const items = [
    {
      title: "Premium Headphones",
      description: "High-quality wireless headphones for an immersive audio experience",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Premium headphones",
      points: 2000
    },
    {
      title: "Smart Fitness Watch",
      description: "Track your health and stay connected with this advanced smartwatch",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Fitness watch",
      points: 1800
    },
    {
      title: "Premium Laptop Backpack",
      description: "Durable, water-resistant backpack with dedicated laptop compartment",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Premium laptop backpack",
      points: 800
    },
    {
      title: "Mechanical Keyboard",
      description: "Premium mechanical keyboard with customizable RGB lighting",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Mechanical keyboard",
      points: 1200
    },
    {
      title: "Ergonomic Desk Chair",
      description: "Comfortable office chair with lumbar support for long work days",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Ergonomic desk chair",
      points: 2500
    },
    {
      title: "Wireless Charging Pad",
      description: "Convenient wireless charging for all your compatible devices",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Wireless charging pad",
      points: 500
    }
  ];

  return (
    <TabsContent value="items" className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <RewardCard 
            key={`item-${index}`}
            title={item.title}
            description={item.description}
            image={item.image}
            imageAlt={item.imageAlt}
            points={item.points}
            availablePoints={availablePoints}
          />
        ))}
      </div>
    </TabsContent>
  );
};

export default ItemRewards;
