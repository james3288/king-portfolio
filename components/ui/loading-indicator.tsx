"use client";

import { useLinkStatus } from "next/link";

export default function LoadingIndicator() {
  const { pending } = useLinkStatus();
  return (
    pending && (
      <span
        aria-hidden
        className={`ml-2 inline-block h-2 w-2 rounded-full bg-gray-400 ${
          pending ? "animate-pulse bg-green-500" : ""
        }`}
      />
    )
  );
}
