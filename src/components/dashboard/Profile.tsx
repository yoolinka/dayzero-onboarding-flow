
import React, { useState } from "react";
import { Edit, Heart, Clock, DollarSign, Cigarette, Users, Settings, Book, ChevronRight, Trophy } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ProfileMilestone } from "./ProfileMilestone";
import { toast } from "@/components/ui/sonner";
import { showMilestone } from "./notifications/MilestoneToast";

// Mock data - in a real app, this would come from a database
const userData = {
  name: "Alex Johnson",
  avatarUrl: "",
  quitDate: "April 3, 2025",
  status: "Strong Today", // "Strong Today", "Struggling", "Open to chat"
  daysSmokeFree: 38,
  moneySaved: 342.00,
  cigarettesAvoided: 760,
  timeReclaimed: 38,
  milestones: [
    { id: 1, title: "1 Week Clean", icon: "🎯", description: "You've remained smoke-free for an entire week!", unlocked: true },
    { id: 2, title: "$100 Saved", icon: "💸", description: "You've saved $100 by not buying cigarettes.", unlocked: true },
    { id: 3, title: "First Craving Conquered", icon: "⏳", description: "You successfully overcame your first strong craving.", unlocked: true },
    { id: 4, title: "No Relapse for 30 Days", icon: "🛑", description: "You've stayed clean for 30 consecutive days.", unlocked: true },
    { id: 5, title: "Health Milestone", icon: "❤️", description: "Your blood pressure has returned to normal levels.", unlocked: false }
  ],
  personalWhy: "I'm quitting for my kids. I'm choosing life over addiction.",
  copingStrategies: ["Breathing exercises", "5-minute walks", "Journaling", "Calling a friend"],
  journalStats: {
    totalEntries: 24,
    frequentMood: "Calm"
  },
  connections: [
    { id: 1, name: "Sarah", avatar: "", status: "Online", days: 45 },
    { id: 2, name: "Michael", avatar: "", status: "Last seen 2h ago", days: 12 },
    { id: 3, name: "Emma", avatar: "", status: "Online", days: 67 }
  ]
};

export function Profile() {
  const [showStats, setShowStats] = useState(true);
  
  const getStatusEmoji = (status: string) => {
    switch (status) {
      case "Strong Today": return "🔥";
      case "Struggling": return "😟";
      case "Open to chat": return "💬";
      default: return "🔥";
    }
  };

  const handleEditProfile = () => {
    toast("Edit Profile", {
      description: "Profile editing will be available soon.",
    });
  };

  const handleShareMilestone = (milestone: string) => {
    toast("Milestone Shared", {
      description: `You've shared your "${milestone}" achievement!`,
    });
  };

  const handleCheeredConnection = (name: string) => {
    toast("Connection Cheered", {
      description: `You've sent encouragement to ${name}!`,
    });
  };

  const handleShowDetailedMilestone = () => {
    showMilestone(userData.daysSmokeFree, userData.moneySaved, userData.cigarettesAvoided);
  };

  return (
    <div className="py-8 space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-primary">
            <AvatarImage src={userData.avatarUrl} alt={userData.name} />
            <AvatarFallback className="text-lg">{userData.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">{userData.name}</h1>
            <div className="text-muted-foreground">Smoke-free since: {userData.quitDate}</div>
            <div className="mt-1 flex items-center">
              <span className="mr-2">{getStatusEmoji(userData.status)}</span>
              <span>{userData.status}</span>
            </div>
          </div>
        </div>
        <Button size="sm" variant="outline" onClick={handleEditProfile}>
          <Edit className="h-4 w-4 mr-1" />
          Edit
        </Button>
      </div>

      {/* Progress Summary */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Progress Summary</CardTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setShowStats(!showStats)}
            >
              {showStats ? "Hide Stats" : "Show Stats"}
            </Button>
          </div>
        </CardHeader>
        <CardContent className={`space-y-4 ${!showStats ? 'opacity-50' : ''}`}>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex gap-3 items-center">
              <div className="bg-primary/20 p-2 rounded-full">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Days smoke-free</div>
                <div className="text-2xl font-bold">{userData.daysSmokeFree}</div>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="bg-green-500/20 p-2 rounded-full">
                <DollarSign className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Money saved</div>
                <div className="text-2xl font-bold">${userData.moneySaved.toFixed(2)}</div>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="bg-red-500/20 p-2 rounded-full">
                <Cigarette className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Cigarettes not smoked</div>
                <div className="text-2xl font-bold">{userData.cigarettesAvoided}</div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-sm font-medium">{userData.daysSmokeFree} days</span>
            </div>
            <Progress value={Math.min(userData.daysSmokeFree, 100)} className="h-2" />
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>Start</span>
              <span onClick={handleShowDetailedMilestone} className="cursor-pointer text-primary hover:underline">
                View detailed progress
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Milestones & Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="h-5 w-5 mr-2" />
            Milestones & Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {userData.milestones.map((milestone) => (
              <ProfileMilestone 
                key={milestone.id}
                title={milestone.title}
                icon={milestone.icon}
                description={milestone.description}
                unlocked={milestone.unlocked}
                onShare={() => handleShareMilestone(milestone.title)}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Personal Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>My Why</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground italic">"{userData.personalWhy}"</p>
            <div className="mt-4">
              <h3 className="font-medium mb-2">My Coping Strategies</h3>
              <div className="flex flex-wrap gap-2">
                {userData.copingStrategies.map((strategy, i) => (
                  <Badge key={i} variant="outline">{strategy}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Journal Access */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Book className="h-5 w-5 mr-2" />
              Journal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Total entries</div>
                <div className="text-xl font-semibold">{userData.journalStats.totalEntries}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Most frequent mood</div>
                <div className="text-xl font-semibold">{userData.journalStats.frequentMood}</div>
              </div>
            </div>
            <Button className="w-full" variant="outline" onClick={() => {
              toast("Journal", { description: "Redirecting to journal entries..." })
            }}>
              View All Journal Entries
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* My Connections */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="h-5 w-5 mr-2" />
            My Connections
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userData.connections.map((connection) => (
              <div key={connection.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={connection.avatar} alt={connection.name} />
                    <AvatarFallback>{connection.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{connection.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <span className={`w-2 h-2 rounded-full ${connection.status.includes('Online') ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                      <span>{connection.status}</span>
                      <span className="mx-1">•</span>
                      <span>{connection.days} days smoke-free</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" onClick={() => {
                    toast("Chat", { description: `Opening chat with ${connection.name}...` })
                  }}>
                    Chat
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => handleCheeredConnection(connection.name)}>
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            <Button className="w-full" variant="outline" onClick={() => {
              toast("Community", { description: "Redirecting to community page..." })
            }}>
              View All Connections
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Settings & Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start" onClick={() => {
              toast("Profile Settings", { description: "Edit profile settings coming soon..." })
            }}>
              Edit Profile Information
            </Button>
            <Button variant="outline" className="w-full justify-start" onClick={() => {
              toast("Privacy Settings", { description: "Privacy settings coming soon..." })
            }}>
              Privacy & Visibility
            </Button>
            <Button variant="outline" className="w-full justify-start" onClick={() => {
              toast("Notifications", { description: "Notification settings coming soon..." })
            }}>
              Notification Preferences
            </Button>
            <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive" onClick={() => {
              toast("Reset Progress", { 
                description: "This action cannot be undone. Are you sure?",
                action: {
                  label: "Cancel",
                  onClick: () => {}
                }
              })
            }}>
              Reset Progress
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
