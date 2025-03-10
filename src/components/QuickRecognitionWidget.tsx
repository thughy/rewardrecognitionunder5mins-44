
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export function QuickRecognitionWidget() {
  const [recipient, setRecipient] = useState('');
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recipient || !value || !message) {
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
        description: "Your colleague will be notified.",
        variant: "default",
      });
      
      // Reset form
      setRecipient('');
      setValue('');
      setMessage('');
      setIsSubmitting(false);
      
      // Show confetti effect - would be implemented with a proper animation library in production
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="recipient">Recipient</Label>
        <div className="relative">
          <Input 
            id="recipient" 
            placeholder="Type a colleague's name" 
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
          {recipient && (
            <div className="absolute bottom-full mb-1 left-0 w-full bg-white shadow-md rounded-md border p-2 z-10">
              <div 
                className="flex items-center gap-2 p-1 hover:bg-muted rounded cursor-pointer"
                onClick={() => setRecipient('Emily Chen')}
              >
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg" alt="Emily Chen" />
                  <AvatarFallback>EC</AvatarFallback>
                </Avatar>
                <span className="text-sm">Emily Chen</span>
              </div>
            </div>
          )}
        </div>
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
      </div>
      
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Recognition'}
      </Button>
    </form>
  );
}
