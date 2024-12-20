import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Detalhes from "./pages/Detalhes";

const router = createBrowserRouter([
    {
    path: "/",
    element: <Home/>,
    },
    {
        path: "/detalhes/:id",
        element: <Detalhes/>
    }

]);

export default router