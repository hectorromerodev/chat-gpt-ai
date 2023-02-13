"use client";

import NewChat from "@/app/components/NewChat";
import { signOut, useSession } from "next-auth/react";

function SideBar() {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <NewChat />

        <div>{/*Module Selection*/}</div>

        {/*Map through the ChatRows*/}
      </div>
      {session && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          onClick={() => signOut()}
          src={session.user?.image || ""}
          alt="profile picture"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
}

export default SideBar;
