"use client";

/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { IChildren } from "@/@types/baseInterfaces";
import { ToastContainer } from "react-toastify";
import "@/styles/globals.css";
import HydrationWrapper from "@/shared/HydrationWrapper/HydrationWrapper";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Teacher student portal",
  description: "Generated by Teacher student portal",
  viewport: "width=device-width, initial-scale=1",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/favicon.ico" },
  ],
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: IChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=DM+Sans:wght@400;500;700&family=Fira+Sans:wght@100;400;500;600;700&family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" enableSystem={false}>
          <HydrationWrapper>{children}</HydrationWrapper>
          <ToastContainer position="top-right" pauseOnFocusLoss pauseOnHover />
        </ThemeProvider>
      </body>
    </html>
  );
}
