import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Under Maintenance",
  description: "Site is currently under maintenance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-bg text-text">{children}</body>
    </html>
  );
}