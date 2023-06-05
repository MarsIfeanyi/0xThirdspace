import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        const { ...payload } = req.body
        delete payload.id
        const ress = await prisma.bounty.update({
            where: {
                id: req.body.id
            },
            data: payload
        })

        res.status(200).json({ message: 'Bounty Updated' })
        return ress
    } catch (error) {
        console.log("Failure", error);
    }
}