import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <section className="flex flex-col items-center py-16 text-center">
      <p className="text-6xl font-bold text-brand-600">404</p>
      <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-slate-600">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-6 rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
      >
        Go to dashboard
      </Link>
    </section>
  )
}

export default NotFoundPage
