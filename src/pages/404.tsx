import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-4 text-center">
      <h1 className="mb-2 text-2xl font-bold">Page not found</h1>
      <p className="mb-4 text-zinc-600">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="rounded bg-black px-4 py-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Return to LearnFlow
      </Link>
    </main>
  );
}
