
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search, MessageCircle, Users, Award, UserPlus, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function Community() {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");

  const handleConnect = (name: string) => {
    toast({
      title: "Connection Request Sent",
      description: `You've sent a connection request to ${name}`,
      duration: 3000,
    });
  };

  const handleMessage = (name: string) => {
    toast({
      title: "Message Sent",
      description: `Your message was sent to ${name}`,
      duration: 3000,
    });
  };

  const handleJoinRoom = (room: string) => {
    toast({
      title: "Joined Group Room",
      description: `You've joined the ${room} room`,
      duration: 3000,
    });
  };

  const handleChallenge = (challenge: string) => {
    toast({
      title: "Challenge Accepted!",
      description: `You've started the ${challenge} challenge`,
      duration: 3000,
    });
  };

  return (
    <div className="py-6">
      {/* Hero Section */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-3">Community Support</h1>
        <p className="text-muted-foreground mb-4">
          Find like-minded people, inspire others, share victories
        </p>
        <Button size="lg" className="bg-primary">
          Find A New Connection
        </Button>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="discover" className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="discover" className="flex items-center gap-2">
            <Search className="h-4 w-4" /> Discover
          </TabsTrigger>
          <TabsTrigger value="connections" className="flex items-center gap-2">
            <Users className="h-4 w-4" /> My Connections
          </TabsTrigger>
          <TabsTrigger value="groups" className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" /> Group Rooms
          </TabsTrigger>
          <TabsTrigger value="challenges" className="flex items-center gap-2">
            <Award className="h-4 w-4" /> Challenges
          </TabsTrigger>
        </TabsList>

        {/* Discover Tab */}
        <TabsContent value="discover" className="space-y-4">
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <Input 
              placeholder="Search by day, trigger, or location..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <div className="flex gap-2">
              <Button variant="outline">Day 1</Button>
              <Button variant="outline">Similar Triggers</Button>
              <Button variant="outline">Near Me</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Alex", day: 5, status: "Motivated", avatar: "" },
              { name: "Jamie", day: 2, status: "Need Support", avatar: "" },
              { name: "Casey", day: 14, status: "Supports Others", avatar: "" },
              { name: "Taylor", day: 1, status: "Need Support", avatar: "" },
              { name: "Jordan", day: 8, status: "Motivated", avatar: "" },
              { name: "Morgan", day: 30, status: "Supports Others", avatar: "" }
            ].map((person, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={person.avatar} />
                      <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{person.name}</CardTitle>
                      <CardDescription>Day {person.day}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="inline-block bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                    {person.status}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => handleConnect(person.name)} 
                    className="w-full"
                    variant="outline"
                    size="sm"
                  >
                    <UserPlus className="mr-2 h-4 w-4" /> Invite to Connect
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* My Connections Tab */}
        <TabsContent value="connections" className="space-y-6">
          <h3 className="text-lg font-semibold mb-3">Your Connections</h3>
          <div className="space-y-4">
            {[
              { name: "Anya", day: 7, online: true, avatar: "" },
              { name: "John", day: 12, online: false, avatar: "" },
              { name: "Maria", day: 3, online: true, avatar: "" }
            ].map((connection, index) => (
              <Card key={index}>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={connection.avatar} />
                        <AvatarFallback>{connection.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ${connection.online ? 'bg-green-500' : 'bg-gray-400'} border-2 border-background`}></div>
                    </div>
                    <div>
                      <p className="font-medium">{connection.name}</p>
                      <p className="text-sm text-muted-foreground">Day {connection.day}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleMessage(connection.name)}
                    >
                      <MessageCircle className="h-4 w-4 mr-1" /> Write
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleMessage(`${connection.name} with encouragement`)}
                    >
                      <Heart className="h-4 w-4 mr-1" /> Cheer Up
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-3">Activity</h3>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-muted rounded-lg">
                <p><span className="font-medium">Anya</span> reached 7 days smoke-free! 🎉</p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p><span className="font-medium">John</span> wrote a new journal entry.</p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p><span className="font-medium">Maria</span> needs support today.</p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Group Rooms Tab */}
        <TabsContent value="groups" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Newcomers", members: 28, description: "Support for people just starting their journey" },
              { name: "Stress Triggers", members: 42, description: "Dealing with stress without smoking" },
              { name: "Parents Who Quit", members: 19, description: "Balancing family life while quitting" },
              { name: "Night Cravings", members: 36, description: "Strategies for late-night urges" }
            ].map((room, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{room.name}</CardTitle>
                  <CardDescription>{room.members} members active</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{room.description}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleJoinRoom(room.name)}
                  >
                    Join Room
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ask a Question</CardTitle>
                <CardDescription>
                  Get help from the community or AI assistant
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input placeholder="Type your question here..." />
                  <Button onClick={() => toast({
                    title: "Question Posted",
                    description: "Your question has been posted to the community",
                    duration: 3000,
                  })}>
                    Ask
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Connection Challenges Tab */}
        <TabsContent value="challenges" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "7 Days Smoke Free", description: "Complete one full week without smoking", participants: 145 },
              { name: "Morning Exercise", description: "Replace morning cigarette with 10-min workout", participants: 78 },
              { name: "Trigger Journal", description: "Track your cravings for 5 days straight", participants: 92 },
              { name: "Money Jar", description: "Save all money you would spend on cigarettes", participants: 213 }
            ].map((challenge, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{challenge.name}</CardTitle>
                  <CardDescription>{challenge.participants} people participating</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{challenge.description}</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button 
                    className="flex-1"
                    onClick={() => handleChallenge(challenge.name)}
                  >
                    Join Challenge
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1"
                    onClick={() => toast({
                      title: "Invitation Sent",
                      description: "Challenge invitation sent to your connections",
                      duration: 3000,
                    })}
                  >
                    Invite Friend
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
