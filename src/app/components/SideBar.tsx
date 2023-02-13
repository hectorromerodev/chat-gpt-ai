"use client";

import ChatRow from "@/app/components/ChatRow";
import NewChat from "@/app/components/NewChat";
import { collection, orderBy, query } from "@firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../firebase";

function SideBar() {
  const { data: session } = useSession();

  const [chats] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <NewChat />

        <div>{/*Module Selection*/}</div>

        {/*Map through the ChatRows*/}
        {chats?.docs.map((chat) => (
          <ChatRow key={chat.id} id={chat.id} />
        ))}
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
