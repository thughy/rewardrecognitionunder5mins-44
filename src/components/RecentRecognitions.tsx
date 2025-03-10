
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Mock data for recent recognitions
const recentRecognitions = [
  {
    id: 1,
    from: { name: 'Sarah Kim', avatar: '/placeholder.svg', avatarFallback: 'SK' },
    to: { name: 'John Doe', avatar: '/placeholder.svg', avatarFallback: 'JD' },
    message: 'Thanks for helping me debug that tricky issue!',
    value: 'teamwork',
    points: 50,
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    from: { name: 'David Wilson', avatar: '/placeholder.svg', avatarFallback: 'DW' },
    to: { name: 'Emily Chen', avatar: '/placeholder.svg', avatarFallback: 'EC' },
    message: 'Your presentation to the client today was exceptional!',
    value: 'excellence',
    points: 75,
    timestamp: '5 hours ago',
  },
  {
    id: 3,
    from: { name: 'James Taylor', avatar: '/placeholder.svg', avatarFallback: 'JT' },
    to: { name: 'Maria Garcia', avatar: '/placeholder.svg', avatarFallback: 'MG' },
    message: 'Your creative solution to the packaging problem will save us 20% in materials.',
    value: 'innovation',
    points: 100,
    timestamp: '1 day ago',
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

export function RecentRecognitions() {
  return (
    <div className="space-y-4">
      {recentRecognitions.map(recognition => (
        <div key={recognition.id} className="flex items-start space-x-3 py-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={recognition.from.avatar} alt={recognition.from.name} />
            <AvatarFallback>{recognition.from.avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex justify-between">
              <p className="text-sm font-medium">
                <span className="font-semibold">{recognition.from.name}</span> 
                <span className="mx-1">→</span> 
                <span className="font-semibold">{recognition.to.name}</span>
              </p>
              <Badge variant="outline" className="bg-bucketlist-lightBlue text-bucketlist-blue text-xs">
                +{recognition.points}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">{recognition.message}</p>
            <div className="flex justify-between items-center pt-1">
              <Badge variant="outline" className={cn("value-badge text-xs py-0", getValueColor(recognition.value))}>
                {getValueLabel(recognition.value)}
              </Badge>
              <span className="text-xs text-muted-foreground">{recognition.timestamp}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
