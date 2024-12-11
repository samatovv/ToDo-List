import { useRoutes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import AboutPage from "../pages/about/index.jsx";


export const MyRoutes = () => {
    return useRoutes([
        {
            path: '/',
            element: <HomePage/>
        },
        {
            path: 'about',
            element: <AboutPage/>
        }
    ])
}