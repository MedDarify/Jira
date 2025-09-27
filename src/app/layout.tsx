import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
// import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
// import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { Suspense } from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
// const inter = Inter({ subsets: ["latin"] });
import QueryProvider from "@/components/query-provider"

export const metadata: Metadata = {
    title: "TaskFlow - Project Management Reimagined",
    description: "Streamline your projects with seamless collaboration. The modern alternative to Jira.",
}


export default function RootLayout(
    { children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(
                `font-sans ${GeistSans.variable} ${GeistMono.variable}`,
                ""
            )}>
                <Suspense fallback={null}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange>
                        <div 
                        className="absolute top-2 right-2 z-50">
                            <ThemeToggle />
                        </div>
                        <QueryProvider>
                            {children}
                        </QueryProvider>
                    </ThemeProvider>
                </Suspense>
            </body>
        </html>
    );
}
