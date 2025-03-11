
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

// Sample employee data that would come from an API in a real application
const sampleEmployees = [
  { id: 1, name: 'Emily Chen', avatar: '/placeholder.svg', initials: 'EC' },
  { id: 2, name: 'John Smith', avatar: '/placeholder.svg', initials: 'JS' },
  { id: 3, name: 'Maria Rodriguez', avatar: '/placeholder.svg', initials: 'MR' },
  { id: 4, name: 'David Wilson', avatar: '/placeholder.svg', initials: 'DW' },
  { id: 5, name: 'Sarah Kim', avatar: '/placeholder.svg', initials: 'SK' },
];

export function QuickRecognitionWidget() {
  const [recipientSearch, setRecipientSearch] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState<{id: number; name: string; avatar: string; initials: string} | null>(null);
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Filter employees based on search input
  const filteredEmployees = recipientSearch.trim() === '' 
    ? [] 
    : sampleEmployees.filter(emp => 
        emp.name.toLowerCase().includes(recipientSearch.toLowerCase())
      );
  
  const handleSelectRecipient = (employee: typeof sampleEmployees[0]) => {
    setSelectedRecipient(employee);
    setRecipientSearch(employee.name);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedRecipient || !value || !message) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Recognition sent!",
        description: `Your recognition for ${selectedRecipient.name} has been sent.`,
        variant: "default",
      });
      
      // Reset form
      setSelectedRecipient(null);
      setRecipientSearch('');
      setValue('');
      setMessage('');
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
    
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.position = 'absolute';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.top = Math.random() * 30 + 30 + '%';
      confetti.style.backgroundColor = ['#FFCE00', '#3B82F6', '#4F46E5', '#10B981'][Math.floor(Math.random() * 4)];
      confetti.style.width = Math.random() * 10 + 5 + 'px';
      confetti.style.height = Math.random() * 10 + 5 + 'px';
      confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
      confetti.style.opacity = (Math.random() * 0.7 + 0.3).toString();
      confetti.style.animation = 'fall ' + (Math.random() * 2 + 1) + 's linear';
      container.appendChild(confetti);
    }
    
    setTimeout(() => {
      document.body.removeChild(container);
    }, 3000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="recipient">Recipient</Label>
        <div className="relative">
          <Input 
            id="recipient" 
            placeholder="Search for a colleague" 
            value={recipientSearch}
            onChange={(e) => setRecipientSearch(e.target.value)}
          />
          {filteredEmployees.length > 0 && (
            <div className="absolute bottom-full mb-1 left-0 w-full bg-white shadow-md rounded-md border p-2 z-10 max-h-[200px] overflow-y-auto">
              {filteredEmployees.map((employee) => (
                <div 
                  key={employee.id}
                  className="flex items-center gap-2 p-2 hover:bg-muted rounded cursor-pointer"
                  onClick={() => handleSelectRecipient(employee)}
                >
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={employee.avatar} alt={employee.name} />
                    <AvatarFallback>{employee.initials}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{employee.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {selectedRecipient && (
          <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-md mt-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={selectedRecipient.avatar} alt={selectedRecipient.name} />
              <AvatarFallback>{selectedRecipient.initials}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{selectedRecipient.name}</span>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="value">Value Demonstrated</Label>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger id="value">
            <SelectValue placeholder="Select a value" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="innovation">Innovation</SelectItem>
            <SelectItem value="teamwork">Teamwork</SelectItem>
            <SelectItem value="excellence">Excellence</SelectItem>
            <SelectItem value="customer">Customer Focus</SelectItem>
            <SelectItem value="integrity">Integrity</SelectItem>
            <SelectItem value="diversity">Diversity & Inclusion</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          placeholder="What did they do that was awesome?" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none"
          rows={3}
        />
        <p className="text-xs text-muted-foreground">
          Be specific about what they did and how it made a difference.
        </p>
      </div>
      
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Recognition'}
      </Button>
    </form>
  );
}
