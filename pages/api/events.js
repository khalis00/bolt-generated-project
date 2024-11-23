import { connectToDatabase } from '../../utils/mongodb'

    export default async function handler(req, res) {
      const { db } = await connectToDatabase()

      if (req.method === 'POST') {
        const { title, date, description } = req.body
        const response = await db.collection('events').insertOne({ title, date, description })
        res.status(201).json(response.ops[0])
      } else if (req.method === 'GET') {
        const events = await db.collection('events').find({}).toArray()
        res.status(200).json(events)
      } else {
        res.setHeader('Allow', ['POST', 'GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
      }
    }
