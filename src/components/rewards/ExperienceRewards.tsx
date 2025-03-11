
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import RewardCard from './RewardCard';

interface ExperienceRewardsProps {
  availablePoints: number;
}

const ExperienceRewards = ({ availablePoints }: ExperienceRewardsProps) => {
  // Array of experience rewards
  const experiences = [
    {
      title: "Wildlife Sanctuary Visit",
      description: "Enjoy a day at the local wildlife sanctuary with a plus one",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Wildlife sanctuary visit",
      points: 1200
    },
    {
      title: "Luxury Spa Day",
      description: "Relax and rejuvenate with a full day of pampering at a premium spa",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Spa day",
      points: 1500
    },
    {
      title: "Cooking Masterclass",
      description: "Learn culinary secrets from professional chefs in this hands-on experience",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Cooking class",
      points: 1000
    },
    {
      title: "Safari Adventure",
      description: "Experience an unforgettable guided safari tour at a renowned nature reserve",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Safari adventure",
      points: 2500
    },
    {
      title: "Mountain Hiking Expedition",
      description: "Challenge yourself with a guided hiking trip through scenic mountain trails",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Mountain hiking",
      points: 1800
    },
    {
      title: "Forest Retreat Weekend",
      description: "Escape to a peaceful cabin in the woods for a weekend of relaxation and nature",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&q=80&w=800",
      imageAlt: "Forest retreat",
      points: 2200
    }
  ];

  return (
    <TabsContent value="experiences" className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((experience, index) => (
          <RewardCard 
            key={`experience-${index}`}
            title={experience.title}
            description={experience.description}
            image={experience.image}
            imageAlt={experience.imageAlt}
            points={experience.points}
            availablePoints={availablePoints}
          />
        ))}
      </div>
    </TabsContent>
  );
};

export default ExperienceRewards;
