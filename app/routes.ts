import { type RouteConfig } from '@react-router/dev/routes'
import { flatRoutes } from '@react-router/fs-routes'

// Enable file-based routing using React Router v7 fs-routes
// Routes are automatically discovered from app/routes/ directory
export default flatRoutes() satisfies RouteConfig