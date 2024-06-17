"use client";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import NProgress from "nprogress";

NProgress.configure({
  showSpinner: false,
  minimum: 0.0,
});

export default function ProgressBar() {
  const handleScroll = () => {
    const position = window.scrollY;
    const scrollPercent =
      (position - 1) /
      (document.documentElement.scrollHeight - window.innerHeight);
    console.log(position);

    NProgress.set(position > 0 ? scrollPercent : 0);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <style>
      {`
        #nprogress .bar {
          height: 2px;
        }
     `}
    </style>
  );
}
