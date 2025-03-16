import HomePage from "./routes/homepage/homePage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import {Layout, RequireAuth } from "./routes/layout/layout";
import Profile from "./routes/profile/profile";
import Chat from "./components/chat/chat";
import RegisterPage from "./routes/register/registerPage";
import LoginPage from "./routes/login/loginPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
       {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: ":id",
          element: <SinglePage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        }
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/chat",
          element: <Chat />,
        },
      ],
    }
  ]);
  return (
    // <div className="layout">
    //   <div className="navBar">
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     <HomePage />
    //   </div>
      
    // </div>

    <RouterProvider router={router} />
  )
}

export default App
