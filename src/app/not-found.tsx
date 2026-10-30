export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-zinc-50">
      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-zinc-600 mb-4">Could not find requested resource</p>
      <a href="/dashboard" className="rounded bg-black px-4 py-2 text-white">
        Return Dashboard
      </a>
    </div>
  );
}
