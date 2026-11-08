import { Link } from 'react-router'
import ErrorMessage from '../components/ui/ErrorMessage.jsx'

function RouteErrorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-50 px-4">
      <ErrorMessage
        title="Something went wrong"
        message="An unexpected error occurred while displaying this page."
      />
      <Link to="/" className="text-sm font-medium text-brand-600 hover:underline">
        ← Back to dashboard
      </Link>
    </main>
  )
}

export default RouteErrorPage
