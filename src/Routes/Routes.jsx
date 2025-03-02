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
                loader: ({ params }) => 
                    fetch("bags.json")
                      .then(response => response.json())
                      .then(bags => {
                        const product = bags.find(bag => bag.id === parseInt(params.id));
                        
                        if (!product) {
                          throw new Response("Product Not Found", { status: 404 });
                        }
                        
                        return product;
                      })
                      .catch(error => {
                        console.error("Error loading product:", error);
                        throw new Response("Failed to load product", { status: 500 });
                      }),
                element: <ProductDetails></ProductDetails>
            }
        ]
    }
])

export default Router