import { Sidebar } from "@/components/layout/sidebar";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <div className="flex">
            <Sidebar />
            <main className="flex-1">{children}</main>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
