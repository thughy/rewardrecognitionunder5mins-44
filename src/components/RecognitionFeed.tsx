
import React from 'react';
import { HeartIcon, MessageSquare, ThumbsUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface RecognitionFeedProps {
  filter?: string;
  valueFilter?: string;
}

// Mock data for recognitions
const recognitions = [
  {
    id: 1,
    from: { 
      name: 'Sarah Kim', 
      avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=250', 
      avatarFallback: 'SK' 
    },
    to: { 
      name: 'John Doe', 
      avatar: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=250', 
      avatarFallback: 'JD' 
    },
    message: 'Thanks for helping me debug that tricky issue. Your expertise saved me hours of frustration!',
    value: 'teamwork',
    points: 50,
    likes: 12,
    comments: 3,
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    from: { 
      name: 'David Wilson', 
      avatar: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=250', 
      avatarFallback: 'DW' 
    },
    to: { 
      name: 'Emily Chen', 
      avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=250', 
      avatarFallback: 'EC' 
    },
    message: 'Your presentation to the client today was exceptional. You really showcased our value proposition clearly!',
    value: 'excellence',
    points: 75,
    likes: 8,
    comments: 2,
    timestamp: '5 hours ago',
  },
  {
    id: 3,
    from: { 
      name: 'James Taylor', 
      avatar: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=250',
      avatarFallback: 'JT' 
    },
    to: { 
      name: 'Maria Garcia', 
      avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=250',
      avatarFallback: 'MG' 
    },
    message: 'Your creative solution to the packaging problem will save us 20% in materials. Great innovation!',
    value: 'innovation',
    points: 100,
    likes: 15,
    comments: 5,
    timestamp: '1 day ago',
  },
  {
    id: 4,
    from: { 
      name: 'Lisa Brown', 
      avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=250',
      avatarFallback: 'LB' 
    },
    to: { 
      name: 'Robert Lee', 
      avatar: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=250',
      avatarFallback: 'RL' 
    },
    message: 'Thanks for staying late to help that customer with their urgent issue. Your dedication is inspiring!',
    value: 'customer',
    points: 50,
    likes: 7,
    comments: 1,
    timestamp: '2 days ago',
  },
];

const getValueColor = (value: string) => {
  switch (value) {
    case 'innovation':
      return 'bg-purple-100 text-purple-800';
    case 'teamwork':
      return 'bg-blue-100 text-blue-800';
    case 'excellence':
      return 'bg-yellow-100 text-yellow-800';
    case 'customer':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getValueLabel = (value: string) => {
  switch (value) {
    case 'innovation':
      return 'Innovation';
    case 'teamwork':
      return 'Teamwork';
    case 'excellence':
      return 'Excellence';
    case 'customer':
      return 'Customer Focus';
    default:
      return value;
  }
};

export function RecognitionFeed({ filter = 'all', valueFilter }: RecognitionFeedProps) {
  // Filter recognitions based on the provided filters
  const filteredRecognitions = recognitions.filter(recognition => {
    if (valueFilter && recognition.value !== valueFilter) {
      return false;
    }
    return true;
  });
  
  return (
    <div className="space-y-4">
      {filteredRecognitions.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <p>No recognitions match your filter criteria</p>
        </div>
      ) : (
        filteredRecognitions.map(recognition => (
          <div key={recognition.id} className="recognition-card animate-fade-in">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={recognition.from.avatar} alt={recognition.from.name} />
                  <AvatarFallback>{recognition.from.avatarFallback}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">
                    {recognition.from.name} → {recognition.to.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{recognition.timestamp}</div>
                </div>
              </div>
              <Badge variant="outline" className="bg-bucketlist-lightBlue text-bucketlist-blue">
                +{recognition.points} pts
              </Badge>
            </div>
            
            <div className="mb-3 text-sm">{recognition.message}</div>
            
            <div className="flex justify-between items-center">
              <Badge variant="outline" className={cn("value-badge", getValueColor(recognition.value))}>
                {getValueLabel(recognition.value)}
              </Badge>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground text-xs h-8 px-2">
                  <ThumbsUp className="h-3.5 w-3.5 mr-1" />
                  {recognition.likes}
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground text-xs h-8 px-2">
                  <MessageSquare className="h-3.5 w-3.5 mr-1" />
                  {recognition.comments}
                </Button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
