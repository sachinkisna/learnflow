import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Card>
        <CardHeader><CardTitle>Welcome back, {session?.user?.name}</CardTitle></CardHeader>
        <CardContent>Start your learning journey today.</CardContent>
      </Card>
    </div>
  );
}
