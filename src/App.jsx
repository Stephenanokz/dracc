import { useEffect } from "react";
import "./App.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutInfo from "./pages/AboutInfo/AboutInfo";
import PhotoGallery from "./pages/PhotoGallery/PhotoGallery";
import ContactInfo from "./pages/ContactInfo/ContactInfo";
import RoomsInfo from "./pages/RoomsInfo/RoomsInfo";
import BlogInfo from "./pages/BlogInfo/BlogInfo";
import Post from "./pages/Post/Post";
import ServicesInfo from "./pages/ServicesInfo/ServicesInfo";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app">
      <ScrollToTop>
        <Navbar />
        <Outlet />
        <Footer />
      </ScrollToTop>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutInfo />,
      },
      {
        path: "/services",
        element: <ServicesInfo />,
      },
      {
        path: "/rooms",
        element: <RoomsInfo />,
      },
      {
        path: "/blog",
        element: <BlogInfo />,
      },
      {
        path: "/blog/:blogId",
        element: <Post />,
      },
      {
        path: "/gallery",
        element: <PhotoGallery />,
      },
      {
        path: "/contact",
        element: <ContactInfo />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
