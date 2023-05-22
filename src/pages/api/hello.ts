// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/client'


// LIKE ZOD
// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<Data>
  res: NextApiResponse
) {
  // res.status(200).json({ name: 'John Doe' })



    try {
      const data = await prisma.user.findFirst()
      return res.status(200).json(data)
      
    } catch (error) {
      return res.status(500).json(error)

    }
  
}
