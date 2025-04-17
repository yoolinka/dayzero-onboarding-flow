
import { Link, useLocation } from 'react-router-dom';
import { Home, Heart, BookOpen, Users, User } from 'lucide-react';

export function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { to: '/dashboard', icon: Home, label: 'Home' },
    { to: '/dashboard/craving-help', icon: Heart, label: 'Help' },
    { to: '/dashboard/journal', icon: BookOpen, label: 'Journal' },
    { to: '/dashboard/community', icon: Users, label: 'Community' },
    { to: '/dashboard/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                location.pathname === item.to
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
