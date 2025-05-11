
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, MessageCircle, BookOpen, Headphones, Lightbulb } from "lucide-react";

export function CravingHelp() {
  const { toast } = useToast();
  const [message, setMessage] = useState("");

  const handleEmergencyButton = () => {
    toast({
      title: "Hold on! You're stronger than this craving",
      description: "Take deep breaths. The urge will pass in 3 minutes.",
      duration: 5000,
    });
  };

  const handleQuickSolution = (solution: string) => {
    toast({
      title: "Great choice!",
      description: `You've chosen to: ${solution}`,
      duration: 3000,
    });
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      toast({
        title: "Message sent",
        description: "Your message has been sent to the community. Stay strong!",
        duration: 3000,
      });
      setMessage("");
    }
  };

  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold mb-6">Need a quick reset?</h1>
      
      {/* Emergency Button Section */}
      <section className="mb-8">
        <Button 
          onClick={handleEmergencyButton}
          className="w-full p-8 bg-destructive text-destructive-foreground hover:bg-destructive/90 flex items-center justify-center gap-3 text-xl font-bold"
        >
          I Want to Smoke
        </Button>
        <div className="mt-4 text-muted-foreground text-sm">
          <p>This urgent feeling will pass in approximately 3 minutes.</p>
          <p>You've already come so far - don't give up now!</p>
        </div>
      </section>

      {/* Tabs for different support options */}
      <Tabs defaultValue="chat" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="chat">Chat Support</TabsTrigger>
          <TabsTrigger value="library">Library</TabsTrigger>
          <TabsTrigger value="quick">Quick Solutions</TabsTrigger>
        </TabsList>

        {/* Chat Support Tab */}
        <TabsContent value="chat" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Community Support
              </CardTitle>
              <CardDescription>
                Share your thoughts or read messages from others who are on the same journey.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea 
                placeholder="Type your message here..."
                className="min-h-[100px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </CardContent>
            <CardFooter>
              <Button onClick={handleSendMessage} className="w-full">
                Send Anonymous Message
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Library Support Tab */}
        <TabsContent value="library" className="space-y-4">
          <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <div className="mr-2 rounded-full bg-primary p-1">
                <BookOpen className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <CardTitle>Understanding Your Triggers</CardTitle>
                <CardDescription>5-minute video explanation</CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <div className="mr-2 rounded-full bg-primary p-1">
                <Headphones className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <CardTitle>Breathing Meditation</CardTitle>
                <CardDescription>3-minute audio guide</CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <div className="mr-2 rounded-full bg-primary p-1">
                <Lightbulb className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <CardTitle>Success Stories</CardTitle>
                <CardDescription>Motivation from those who succeeded</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </TabsContent>

        {/* Quick Solutions Tab */}
        <TabsContent value="quick" className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "I'm going for a walk",
            "Listen to a podcast",
            "Reread my quit reasons",
            "Drink water instead",
            "Call a supportive friend",
            "Do a quick stretch"
          ].map((solution) => (
            <Button 
              key={solution} 
              variant="outline" 
              className="h-auto py-6 justify-start text-left"
              onClick={() => handleQuickSolution(solution)}
            >
              <span className="mr-auto">{solution}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
