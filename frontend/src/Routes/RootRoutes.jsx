import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layouts/Layout"
import FrontPage from "../Pages/FrontPage"
import NotFound from "../Pages/NotFound"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {path: "", element: <FrontPage />},
            {path: "", element: <NotFound />}
        ]
    }
])