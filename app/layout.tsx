import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Loan Forgiveness Tracker",
  description: "Track progress toward PSLF and other federal loan forgiveness programs. Monitor payments, employment verification, and deadlines automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ef67a6b9-6dd1-4067-b6a0-78b3fd73a2eb"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
