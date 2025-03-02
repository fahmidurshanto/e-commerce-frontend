import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/productDetails/:id",
                element: <ProductDetails></ProductDetails>
            }
        ]
    }
])

export default Router