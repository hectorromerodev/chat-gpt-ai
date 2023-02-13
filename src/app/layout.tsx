import "./globals.css";
import ClientProvider from "@/app/components/ClientProvider";
import Login from "@/app/components/Login";
import SessionProvider from "@/app/components/SessionProvider";
import SideBar from "@/app/components/SideBar";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { type ReactNode } from "react";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-[#202123] m-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <SideBar />
              </div>

              <ClientProvider />

              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
