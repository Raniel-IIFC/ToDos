import { createBrowserRouter } from 'react-router'
import Layout from './components/layout/Layout.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import RouteErrorPage from './pages/RouteErrorPage.jsx'
import TaskDetailPage from './pages/TaskDetailPage.jsx'
import TasksPage from './pages/TasksPage.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouteErrorPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'tasks', element: <TasksPage /> },
      { path: 'tasks/:id', element: <TaskDetailPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
