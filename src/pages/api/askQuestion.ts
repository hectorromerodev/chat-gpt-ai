// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import query from "@/lib/queryApi";
import admin from "firebase-admin";
import type { NextApiRequest, NextApiResponse } from "next";
import { adminDB } from "../../../firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;
  if (!prompt || !chatId || !model || !session) {
    res.status(400).json({ answer: "Missing parameters" });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid chat ID" });
    return;
  }

  const response = await query(prompt, chatId, model);

  const msg: Message = {
    text:
      response ||
      "Chat GPT was unable to find an answer for that. Please try again.",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar: "https://links.papareact.com/89k",
    },
  };

  await adminDB
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(msg);

  res.status(200).json({ answer: msg.text });
}
