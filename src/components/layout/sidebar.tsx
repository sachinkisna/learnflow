import Link from "next/link";

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-zinc-100 p-4 border-r">
      <h2 className="font-bold text-xl mb-6">LearnFlow</h2>
      <nav className="space-y-2">
        <Link href="/dashboard" className="block p-2 hover:bg-zinc-200 rounded">Dashboard</Link>
        <Link href="/learning-paths" className="block p-2 hover:bg-zinc-200 rounded">Learning Paths</Link>
      </nav>
    </div>
  );
}
