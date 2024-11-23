import Link from 'next/link'

    export default function Navbar() {
      return (
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/users">Users</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/attendance">Attendance</Link>
            </li>
            <li>
              <Link href="/growth">Growth Metrics</Link>
            </li>
          </ul>
          <style jsx>{`
            nav {
              background: #333;
              padding: 1em;
            }
            ul {
              list-style: none;
              padding: 0;
            }
            li {
              display: inline;
              margin-right: 1em;
            }
            a {
              color: white;
              text-decoration: none;
            }
          `}</style>
        </nav>
      )
    }
