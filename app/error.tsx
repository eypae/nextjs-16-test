"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-5 text-center">
      <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>
      <p className="mb-8 text-gray-400">
        {error.message ||
          "An unexpected error occurred while loading the page."}
      </p>
      <button
        onClick={() => reset()}
        className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
