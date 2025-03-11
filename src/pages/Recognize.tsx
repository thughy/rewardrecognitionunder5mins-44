
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RecognitionForm } from '@/components/RecognitionForm';

const Recognize: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Recognize a Colleague</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Send a Recognition</CardTitle>
          <CardDescription>
            Give a shoutout to a colleague who demonstrated core values
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecognitionForm />
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-lg">Innovation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Thinking creatively and bringing new ideas to the table that improve our products, processes or customer experience.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-lg">Teamwork</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Collaborating effectively, supporting colleagues, and working together to achieve shared goals.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-lg">Excellence</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Demonstrating exceptional quality in their work, going above and beyond expectations.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Add confetti animation CSS */}
      <style jsx global>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .confetti {
          position: absolute;
          animation: fall linear forwards;
        }
      `}</style>
    </div>
  );
};

export default Recognize;
