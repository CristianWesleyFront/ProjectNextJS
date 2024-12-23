import { Inter as FontSans } from "next/font/google"
import "@/styles/globals.css"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { ProjectProvider } from "@/context/project-context"
import { Toaster } from "@/components/ui/toaster"
import { SessionProvider } from "@/config/sessionProvider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "shadcn",
      url: "https://shadcn.com",
    },
  ],
  creator: "shadcn",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider>
              <ProjectProvider>
                {children}
                <Toaster />
                <TailwindIndicator />
              </ProjectProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
