import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Page/HomePage';
import Portfolio from './Page/Portfolio';

const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: "/"
  },
  {
    element: <Portfolio />,
    path: "/Portfolio"
  },

]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
