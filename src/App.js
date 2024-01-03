import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";



const router = createBrowserRouter([
  {path: "/", element: <HomePage/>}, 
  {path: "/products", element: <ProductPage/>}, 
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
