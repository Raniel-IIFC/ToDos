function ErrorMessage({ title, message, onRetry }) {
  return (
    <div role="alert" className="mx-auto max-w-md rounded-lg border border-red-200 bg-red-50 p-6 text-center">
      <h2 className="text-lg font-semibold text-red-800">{title}</h2>
      {message && <p className="mt-2 text-sm text-red-700">{message}</p>}
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Try again
        </button>
      )}
    </div>
  )
}

export default ErrorMessage
