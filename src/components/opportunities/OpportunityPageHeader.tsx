
import React from 'react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface OpportunityPageHeaderProps {
  title: string;
  description: string;
  icon: LucideIcon;
  ctaText: string;
  onCtaClick: () => void;
}

const OpportunityPageHeader = ({ 
  title, 
  description, 
  icon: Icon, 
  ctaText, 
  onCtaClick 
}: OpportunityPageHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-bucketlist-blue/10 text-bucketlist-blue">
          <Icon size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          <p className="text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
      <Button 
        onClick={onCtaClick}
        className="bg-bucketlist-blue hover:bg-bucketlist-indigo"
      >
        {ctaText}
      </Button>
    </div>
  );
};

export default OpportunityPageHeader;
