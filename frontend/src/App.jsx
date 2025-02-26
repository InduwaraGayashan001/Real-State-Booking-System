import HomePage from "./routes/homepage/homePage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import Layout from "./routes/layout/layout";


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
        }
      ]
    },
    {
      path: "/list",
      element: <ListPage />,
    },
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
