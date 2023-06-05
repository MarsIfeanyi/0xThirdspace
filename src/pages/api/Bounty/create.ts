import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {
        try {
            // console.log(req.body,"req.body")
            const { ...input } = req.body
            const ress = await prisma.bounty.create({
                data: input
            })

            res.status(200).json({ message: 'Bounty Created' })
            return ress
        } catch (error) {
            console.log("Failure", error);
        }
    }
}