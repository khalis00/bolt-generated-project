import { useState, useEffect } from 'react'

    export default function AttendanceTracking() {
      const [attendance, setAttendance] = useState([])
      const [eventId, setEventId] = useState('')
      const [userId, setUserId] = useState('')

      useEffect(() => {
        fetch('/api/attendance')
          .then(response => response.json())
          .then(data => setAttendance(data))
      }, [])

      const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch('/api/attendance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ eventId, userId }),
        })
        const data = await res.json()
        setAttendance([...attendance, data])
        setEventId('')
        setUserId('')
      }

      return (
        <div>
          <h1>Attendance Tracking</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={eventId}
              onChange={(e) => setEventId(e.target.value)}
              placeholder="Event ID"
              required
            />
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="User ID"
              required
            />
            <button type="submit">Track Attendance</button>
          </form>
          <ul>
            {attendance.map(record => (
              <li key={record._id}>{record.eventId} - {record.userId}</li>
            ))}
          </ul>
        </div>
      )
    }
