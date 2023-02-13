"use client";

import { PaperAirplaneIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import { useState } from "react";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const { data: session } = useSession();
  const [prompt, setPrompt] = useState("");

  return (
    <div
      className="bg-gray-700/50 text-gray-400 rounded-lg text-sm
      focus:outline-none"
    >
      <form className="p-5 space-x-5 flex">
        <input
          className="bg-transparent flex-1 focus:outline-none
            disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Enter your message here..."
        />
        <button
          disabled={!prompt || !session}
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2
            rounded disabled:cursor-not-allowed disabled:bg-gray-300"
          type="submit"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>

      <div>{/*  ModelSelection */}</div>
    </div>
  );
}

export default ChatInput;
