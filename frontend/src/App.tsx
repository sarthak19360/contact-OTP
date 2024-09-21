import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Contacts from "./components/Contacts";
import History from "./components/History";
import SingleContact from "./components/SingleContact";
import ComposeMessage from "./components/ComposeMessage";
import Home from "./components/Home";

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Body />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/contact",
        element: <SingleContact />,
      },
      {
        path: "/compose",
        element: <ComposeMessage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      {/* @ts-ignore */}
      <RouterProvider router={Approuter}>
        <Header />
        <Body />
      </RouterProvider>
    </div>
  );
};

export default App;
