import ReactDOM from "react-dom"
import "./style.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./components/LAnding/LandingPage";

const Applayout = () => {
  return (
    <>
    <LandingPage/>
   
     
    </>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout/>,
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


