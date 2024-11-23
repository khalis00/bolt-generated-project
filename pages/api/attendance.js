import { connectToDatabase } from '../../utils/mongodb'

    export default async function handler(req, res) {
      const { db } = await connectToDatabase()

      if (req.method === 'POST') {
        const { eventId, userId } = req.body
        const response = await db.collection('attendance').insertOne({ eventId, userId })
        res.status(201).json(response.ops[0])
      } else if (req.method === 'GET') {
        const attendance = await db.collection('attendance').find({}).toArray()
        res.status(200).json(attendance)
      } else {
        res.setHeader('Allow', ['POST', 'GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
      }
    }
