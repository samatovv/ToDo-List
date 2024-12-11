import { useRoutes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"


export const MyRoutes = () => {
    return useRoutes([
        {
            path: '/',
            element: <HomePage/>
        }
    ])
}