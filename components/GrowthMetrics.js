import { useState, useEffect } from 'react'

    export default function GrowthMetrics() {
      const [metrics, setMetrics] = useState([])
      const [userId, setUserId] = useState('')
      const [metric, setMetric] = useState('')
      const [value, setValue] = useState('')

      useEffect(() => {
        fetch('/api/growth')
          .then(response => response.json())
          .then(data => setMetrics(data))
      }, [])

      const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch('/api/growth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId, metric, value }),
        })
        const data = await res.json()
        setMetrics([...metrics, data])
        setUserId('')
        setMetric('')
        setValue('')
      }

      return (
        <div>
          <h1>Growth Metrics</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="User ID"
              required
            />
            <input
              type="text"
              value={metric}
              onChange={(e) => setMetric(e.target.value)}
              placeholder="Metric"
              required
            />
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Value"
              required
            />
            <button type="submit">Add Metric</button>
          </form>
          <ul>
            {metrics.map(metric => (
              <li key={metric._id}>{metric.userId} - {metric.metric}: {metric.value}</li>
            ))}
          </ul>
        </div>
      )
    }
