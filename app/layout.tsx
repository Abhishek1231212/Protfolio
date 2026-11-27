import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Abhishek Bichala — Senior Software Engineer",
  description:
    "Senior Software Engineer in Hyderabad building event-driven Java, Spring Boot and React systems. Also available for freelance software, design, interview prep and content.",
};

export const viewport: Viewport = {
  themeColor: "#f6f4f0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Inter 900 for display type, Figtree for reading, IBM Plex Mono for details */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@300..800&family=Geist:wght@400..600&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&family=Inter:wght@900&display=swap"
        />
      </head>
      <body className="bg-page text-ink font-sans antialiased">{children}</body>
    </html>
  );
}
