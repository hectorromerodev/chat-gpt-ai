// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { query } from "@firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

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
  }
  const response = await query(prompt);
}
