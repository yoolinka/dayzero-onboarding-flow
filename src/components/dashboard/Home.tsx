
import { useNavigate } from 'react-router-dom';

export function Home() {
  return (
    <div className="space-y-6 py-8">
      <h1 className="text-3xl font-bold">Welcome back</h1>
      
      <div className="space-y-4">
        <div className="p-6 bg-card rounded-lg border">
          <h2 className="text-2xl font-semibold mb-2">Smoke-Free Timer</h2>
          <div className="text-4xl font-bold text-primary">5 days, 3 hours</div>
          <p className="text-muted-foreground mt-2">Since you quit smoking</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-card rounded-lg border">
            <h3 className="text-sm font-medium text-muted-foreground">Cigarettes Avoided</h3>
            <p className="text-2xl font-bold mt-1">147</p>
          </div>
          <div className="p-4 bg-card rounded-lg border">
            <h3 className="text-sm font-medium text-muted-foreground">Money Saved</h3>
            <p className="text-2xl font-bold mt-1">$73.50</p>
          </div>
        </div>
      </div>
    </div>
  );
}
