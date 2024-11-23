import { useState, useEffect } from 'react'

    export default function EventManagement() {
      const [events, setEvents] = useState([])
      const [title, setTitle] = useState('')
      const [date, setDate] = useState('')
      const [description, setDescription] = useState('')

      useEffect(() => {
        fetch('/api/events')
          .then(response => response.json())
          .then(data => setEvents(data))
      }, [])

      const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch('/api/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, date, description }),
        })
        const data = await res.json()
        setEvents([...events, data])
        setTitle('')
        setDate('')
        setDescription('')
      }

      return (
        <div>
          <h1>Event Management</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Date"
              required
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
            ></textarea>
            <button type="submit">Add Event</button>
          </form>
          <ul>
            {events.map(event => (
              <li key={event._id}>{event.title} - {event.date}</li>
            ))}
          </ul>
        </div>
      )
    }
