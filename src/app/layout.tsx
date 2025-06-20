import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
    title: "EngenMe - Farouk Hasnaoui | Full-Stack Software Engineer",
    description: "Performance-driven software solutions for startups and businesses. 2+ years experience in Next.js, TypeScript, and rapid development.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        </body>
        </html>
    );
}