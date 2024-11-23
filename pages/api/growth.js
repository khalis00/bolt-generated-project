import { connectToDatabase } from '../../utils/mongodb'

    export default async function handler(req, res) {
      const { db } = await connectToDatabase()

      if (req.method === 'POST') {
        const { userId, metric, value } = req.body
        const response = await db.collection('growth').insertOne({ userId, metric, value })
        res.status(201).json(response.ops[0])
      } else if (req.method === 'GET') {
        const growthMetrics = await db.collection('growth').find({}).toArray()
        res.status(200).json(growthMetrics)
      } else {
        res.setHeader('Allow', ['POST', 'GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
      }
    }
