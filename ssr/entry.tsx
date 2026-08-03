import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from '../src/App'
import BookingPage from '../src/pages/BookingPage'
import AdminPage from '../src/pages/AdminPage'
import PrivacyPage from '../src/pages/PrivacyPage'

export function render(path: string): string {
  let element: React.ReactNode
  if (path === '/rendez-vous') {
    element = <BookingPage />
  } else   if (path === '/admifri') {
    element = <AdminPage />
  } else if (path === '/privacy') {
    element = <PrivacyPage />
  } else {
    element = <App />
  }

  return renderToString(
    <StaticRouter location={path}>
      {element}
    </StaticRouter>
  )
}
