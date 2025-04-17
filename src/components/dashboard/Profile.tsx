
export function Profile() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <div className="space-y-4">
        <div className="p-4 bg-card rounded-lg border">
          <h2 className="text-xl font-semibold mb-2">Progress</h2>
          <p className="text-4xl font-bold text-primary">5 Days</p>
          <p className="text-muted-foreground mt-1">Smoke-free streak</p>
        </div>
      </div>
    </div>
  );
}
