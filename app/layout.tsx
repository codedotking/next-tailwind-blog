import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import "./globals.css";
import ProgressBar from "@/components/ProgressBar";
import { serif } from "@/lib/fonts";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: "He's Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={serif.className}>
          <ThemeProvider attribute="class" disableTransitionOnChange={false}>
            <div className="mx-auto max-w-2xl bg-[--bg] dark:bg-transparent dark:text-white px-5 py-12 text-[--text]">
              <ProgressBar />
              <Header />
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
