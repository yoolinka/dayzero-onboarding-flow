import { Routes, Route } from 'react-router-dom';
import { BottomNav } from '../components/BottomNav';
import { Home } from '../components/dashboard/Home';
import { CravingHelp } from '../components/dashboard/CravingHelp';
import { Journal } from '../components/dashboard/Journal';
import { Community } from '../components/dashboard/Community';
import { Profile } from '../components/dashboard/Profile';
const Dashboard = () => {
  return <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="flex-1 container mx-auto px-4 pb-16 rounded-none my-0 bg-slate-50">
        <Routes>
          <Route index element={<Home />} />
          <Route path="craving-help" element={<CravingHelp />} />
          <Route path="journal" element={<Journal />} />
          <Route path="community" element={<Community />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
      <BottomNav />
    </div>;
};
export default Dashboard;