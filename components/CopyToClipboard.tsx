"use client";

import { useEffect, useRef, useState } from "react";

export default function CopyToClipboard({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const timeOutRef = useRef<any>(null);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      timeOutRef.current = setTimeout(() => {
        setCopied(() => {
          clearTimeout(timeOutRef.current);
          return false;
        });
      }, 500);
    } catch (error) {
    } finally {
    }
  };

  return (
    <button onClick={copyToClipboard}>
      {copied ? (
        <svg
          className=" dark:stroke-white"
          stroke="#636c76"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke="none" d="M0 0h24v24H0z"></path>
          <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path>
          <path d="M4.012 16.737a2 2 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path>
          <path d="M11 14l2 2l4 -4"></path>
        </svg>
      ) : (
        <svg
          className=" dark:stroke-white"
          stroke="#636c76"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path>
          <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path>
        </svg>
      )}
    </button>
  );
}
