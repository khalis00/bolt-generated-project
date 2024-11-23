import { connectToDatabase } from '../../utils/mongodb'

    export default async function handler(req, res) {
      const { db } = await connectToDatabase()

      if (req.method === 'POST') {
        const { name, age, details } = req.body
        const response = await db.collection('users').insertOne({ name, age, details })
        res.status(201).json(response.ops[0])
      } else if (req.method === 'GET') {
        const users = await db.collection('users').find({}).toArray()
        res.status(200).json(users)
      } else {
        res.setHeader('Allow', ['POST', 'GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
      }
    }
