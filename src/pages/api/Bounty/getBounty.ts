import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === "GET") {

    try {
      const ress = await prisma.Bounty.findMany({})

      res.status(200).json({ message: 'Bounty Get' })
      return ress
    } catch (error) {
      console.log("Failure", error);
    }
  }
}