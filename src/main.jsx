// main style file
import "./index.css";
// default import from react
import { createRoot } from "react-dom/client";
// import from react router to create routes
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
// components
import Home from "./pages/Home/Home.jsx";
import Auth from "./pages/Auth/Auth.jsx";
import VideoPlayer from "./pages/Video/VideoPlayer.jsx";
// toast library
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// get user context
import { UserProvider, useUser } from "./contexts/userProfile.jsx";

function App() {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
}

function Main() {
  const { user } = useUser();
  return <RouterProvider router={Routes(user)} />;
}
// route var
const Routes = (user) =>
  createBrowserRouter([
    {
      path: "/",
      element: user ? <Home /> : <Navigate to="/auth" />,
      errorElement: null,
    },
    {
      path: "/auth",
      element: user ? <Navigate to="/" /> : <Auth />,
      errorElement: null,
    },
    {
      path: "/movie/player/:id",
      element: user ? <VideoPlayer /> : <Navigate to="/auth" />,
      errorElement: null,
    },
  ]);

const rootElement = document.getElementById("root");
if (!rootElement._root) {
  const root = createRoot(rootElement);
  rootElement._root = root;
  root.render(
    <>
      <ToastContainer theme="dark" />
      <App />
    </>
  );
} else {
  rootElement._root.render(
    <>
      <ToastContainer theme="dark" />
      <App />
    </>
  );
}
