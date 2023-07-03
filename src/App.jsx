import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Translate } from "./features/Translate/Translate";
import { Home } from "./features/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/translate",
    element: <Translate />,
  },
]);

function App () {
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;