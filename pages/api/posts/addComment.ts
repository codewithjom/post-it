import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
import prisma from '../../../prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const session = await getServerSession(req, res, authOptions)
    if (!session) return res.status(401).json({ message: 'Please sign in.' })

    // get user
    const prismaUser = await prisma.user.findUnique({
      where: {
        email: session?.user?.email
      }
    })

    try {
      const { title, postID } = req.body.data

      if (!title.length) {
        return res.status(401).json({ message: 'Please enter something' })
      }

      const result = await prisma.comment.create({
        data: {
          message: title,
          userID: prismaUser?.id,
          postID
        }
      })
      res.status(200).json(result)
    } catch (err) {
      res.status(403).json({ err: 'Error has occured whilst making a post' })
    }
  }
}
