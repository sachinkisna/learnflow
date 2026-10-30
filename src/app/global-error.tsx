"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex h-screen w-full flex-col items-center justify-center bg-zinc-50 p-4">
          <h2 className="text-2xl font-bold mb-2">Something went wrong!</h2>
          <p className="text-zinc-600 mb-4">{error.message || "An unexpected error occurred."}</p>
          <button
            onClick={() => reset()}
            className="rounded bg-black px-4 py-2 text-white"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
