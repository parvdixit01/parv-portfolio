import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { siteConfig } from "@/data/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://parv-portfolio.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.title} based in ${siteConfig.location}. ${siteConfig.tagline} Specializing in CI/CD, Docker, Kubernetes, cloud infrastructure, and Linux.`,
  keywords: [
    "DevOps Engineer",
    "Cloud Engineer",
    "Parv Dixit",
    "Pune",
    "Kubernetes",
    "Docker",
    "CI/CD",
    "AWS",
    "Terraform",
    "Linux",
    "Infrastructure",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: siteConfig.domain,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrains.variable} min-h-screen antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
