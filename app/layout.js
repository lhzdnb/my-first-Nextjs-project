import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientThemeWrapper from "@/ context/ClientThemeWrapper";
import { ThemeProvider } from "@/ context/ThemeContext";
import Providers from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Tutorial",
  description: "Build awesome websites with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ClientThemeWrapper>
            <Navbar />
            <main className="px-8 py-20 max-w-6xl mx-auto">
              <Providers>{children}</Providers>
            </main>
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
