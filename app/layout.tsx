import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Northgate IT Knowledge Base",
  description:
    "Sample knowledge base portal demonstrating internal runbooks and external self-service articles side by side. All content is fictional, built as a portfolio demo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
