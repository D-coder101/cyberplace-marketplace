import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Home from "./pages/Home";
import Cart from "./features/cart/Cart";
import AppLayout from "./ui/AppLayout";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
// import Shipping from "./pages/Shipping";
import "./index.css";
// import CreateCustomer from "./features/user/customer/CreateCustomer";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:id",
        element: <Product />
      },
      {
        path: "/product",
        element: <Product />,
      },
    

      // {
      //   path: "/vendor/registration",
      //   element: <FormSteps />,
      // },
      // {
      //   path: "/login",
      //   element: <SignIn />,
      // },
      // {
      //   path: "/shipping",
      //   element: <Shipping />,
      // },
    ],
  },

  // {
  //   path: "/",
  //   element: <CreateVendor />,
  // },
  // {
  //   path: "/vendor/signup",
  //   element: <CreateVendor />,
  // },
  // {
  //   path: "/vendor/registration",
  //   element: <FormSteps />,
  // },
  // {
  //   path: "/login",
  //   element: <SignIn />,
  // },
  // {
  //   path: "/home",
  //   element: <Home />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
