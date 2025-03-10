
import React, { useState } from 'react';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

// Mock data for colleagues
const colleagues = [
  { id: 1, name: 'Emily Chen', department: 'Engineering', avatar: '/placeholder.svg', avatarFallback: 'EC' },
  { id: 2, name: 'David Wilson', department: 'Customer Support', avatar: '/placeholder.svg', avatarFallback: 'DW' },
  { id: 3, name: 'Maria Garcia', department: 'HR', avatar: '/placeholder.svg', avatarFallback: 'MG' },
  { id: 4, name: 'James Taylor', department: 'Operations', avatar: '/placeholder.svg', avatarFallback: 'JT' },
  { id: 5, name: 'Lisa Brown', department: 'Engineering', avatar: '/placeholder.svg', avatarFallback: 'LB' },
];

export function RecognitionForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColleague, setSelectedColleague] = useState<number | null>(null);
  const [selectedValue, setSelectedValue] = useState('');
  const [message, setMessage] = useState('');
  const [points, setPoints] = useState([50]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const filteredColleagues = colleagues.filter(colleague => 
    colleague.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedColleague || !selectedValue || !message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Recognition sent!",
        description: `You've awarded ${points[0]} points to your colleague.`,
        variant: "default",
      });
      
      // Reset form
      setSearchTerm('');
      setSelectedColleague(null);
      setSelectedValue('');
      setMessage('');
      setPoints([50]);
      setIsSubmitting(false);
      
      // Show confetti effect
      showConfetti();
    }, 1000);
  };
  
  const showConfetti = () => {
    // This is a simplified confetti effect, a real implementation would use a library like canvas-confetti
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';
    document.body.appendChild(container);
    
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.top = Math.random() * 30 + 30 + '%';
      confetti.style.backgroundColor = ['#FFCE00', '#3B82F6', '#4F46E5', '#10B981'][Math.floor(Math.random() * 4)];
      confetti.style.width = Math.random() * 10 + 5 + 'px';
      confetti.style.height = Math.random() * 10 + 5 + 'px';
      confetti.style.animationDuration = Math.random() * 2 + 1 + 's';
      container.appendChild(confetti);
    }
    
    setTimeout(() => {
      document.body.removeChild(container);
    }, 3000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="colleague-search">Find Colleague</Label>
          <Input 
            id="colleague-search" 
            placeholder="Search by name" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {searchTerm && (
          <Card>
            <CardContent className="p-2">
              {filteredColleagues.length === 0 ? (
                <p className="text-sm text-muted-foreground py-2">No colleagues found</p>
              ) : (
                <div className="space-y-1 max-h-60 overflow-y-auto">
                  {filteredColleagues.map(colleague => (
                    <div 
                      key={colleague.id} 
                      className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors ${selectedColleague === colleague.id ? 'bg-accent' : 'hover:bg-muted'}`}
                      onClick={() => {
                        setSelectedColleague(colleague.id);
                        setSearchTerm(colleague.name);
                      }}
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={colleague.avatar} alt={colleague.name} />
                        <AvatarFallback>{colleague.avatarFallback}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{colleague.name}</p>
                        <p className="text-xs text-muted-foreground">{colleague.department}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
      
      <div className="space-y-2">
        <Label>Select Core Value</Label>
        <RadioGroup 
          value={selectedValue} 
          onValueChange={setSelectedValue}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-muted">
            <RadioGroupItem value="innovation" id="innovation" />
            <Label htmlFor="innovation" className="font-normal cursor-pointer">
              <span className="font-semibold block">Innovation</span>
              <span className="text-xs text-muted-foreground">Creative ideas & solutions</span>
            </Label>
          </div>
          
          <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-muted">
            <RadioGroupItem value="teamwork" id="teamwork" />
            <Label htmlFor="teamwork" className="font-normal cursor-pointer">
              <span className="font-semibold block">Teamwork</span>
              <span className="text-xs text-muted-foreground">Collaboration & support</span>
            </Label>
          </div>
          
          <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-muted">
            <RadioGroupItem value="excellence" id="excellence" />
            <Label htmlFor="excellence" className="font-normal cursor-pointer">
              <span className="font-semibold block">Excellence</span>
              <span className="text-xs text-muted-foreground">Quality & high standards</span>
            </Label>
          </div>
          
          <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-muted">
            <RadioGroupItem value="customer" id="customer" />
            <Label htmlFor="customer" className="font-normal cursor-pointer">
              <span className="font-semibold block">Customer Focus</span>
              <span className="text-xs text-muted-foreground">Client & customer service</span>
            </Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Recognition Message</Label>
        <Textarea 
          id="message" 
          placeholder="Describe what they did and the impact it had..." 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-[100px]"
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label>Recognition Points</Label>
          <span className="font-semibold text-bucketlist-blue">{points[0]} points</span>
        </div>
        <Slider
          value={points}
          onValueChange={setPoints}
          max={100}
          step={5}
          className="pt-4"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="visibility">Visibility</Label>
        <Select defaultValue="public">
          <SelectTrigger id="visibility">
            <SelectValue placeholder="Select visibility" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="public">Public to Everyone</SelectItem>
            <SelectItem value="team">Team Only</SelectItem>
            <SelectItem value="private">Private (Recipient Only)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Recognition'}
      </Button>
    </form>
  );
}
