import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === "GET") {
    try {
      // console.log(req.body,"req.body")
      const ress = await prisma.bounty.findMany({
        
      })

      res.status(200).json([...ress])
      // res.json(ress)
    } catch (error) {
      console.log("Failure", error);
    }
  }
}