
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Clock, Cigarette, PiggyBank, Star } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { showDailyCheckIn } from './notifications/DailyCheckIn';
import { showMilestone } from './notifications/MilestoneToast';

export function Home() {
  const navigate = useNavigate();
  const quitDate = new Date('2024-04-12'); // This should come from user data
  const [showHealthProgress, setShowHealthProgress] = useState(false);
  
  const handleResetDate = () => {
    navigate('/dashboard/profile');
  };

  const handleCravingHelp = () => {
    navigate('/dashboard/craving-help');
  };

  const handleJournalClick = () => {
    navigate('/dashboard/journal');
  };

  const handleDailyCheckIn = () => {
    showDailyCheckIn();
  };

  const handleMilestoneClick = () => {
    showMilestone(5, 73.50, 147);
  };

  return (
    <div className="space-y-6 py-8">
      <h1 className="text-3xl font-bold">Welcome back</h1>
      
      <div className="space-y-4">
        {/* Smoke-Free Timer */}
        <Card className="p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl">Smoke-Free Timer</CardTitle>
            <CardDescription>
              Since {quitDate.toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary">
              {formatDistanceToNow(quitDate)}
            </div>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={handleResetDate}
            >
              Reset Quit Date
            </Button>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Cigarette className="h-4 w-4 text-muted-foreground" />
              <h3 className="text-sm font-medium text-muted-foreground">Cigarettes Avoided</h3>
            </div>
            <p className="text-2xl font-bold mt-1">147</p>
            <Button 
              variant="link" 
              className="px-0 text-xs"
              onClick={handleCravingHelp}
            >
              Need help?
            </Button>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <PiggyBank className="h-4 w-4 text-muted-foreground" />
              <h3 className="text-sm font-medium text-muted-foreground">Money Saved</h3>
            </div>
            <p className="text-2xl font-bold mt-1">$73.50</p>
          </Card>
        </div>

        {/* Health Progress */}
        <Card className="p-6">
          <CardHeader className="pb-4">
            <CardTitle>Health Progress</CardTitle>
            <CardDescription>Your body is healing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={65} className="w-full" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Start</span>
              <span>Current: Lung capacity improving</span>
            </div>
            <Button 
              variant="secondary" 
              className="w-full"
              onClick={() => setShowHealthProgress(!showHealthProgress)}
            >
              {showHealthProgress ? 'Hide Details' : 'View Progress'}
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button onClick={handleDailyCheckIn} className="w-full">
            <Clock className="mr-2" />
            Daily Check-in
          </Button>
          <Button onClick={handleJournalClick} className="w-full">
            <Star className="mr-2" />
            Write Journal
          </Button>
          <Button onClick={handleMilestoneClick} className="w-full col-span-2">
            <Heart className="mr-2" />
            View Milestones
          </Button>
        </div>
      </div>
    </div>
  );
}
