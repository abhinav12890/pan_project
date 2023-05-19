import React, { useState, useEffect, useContext } from "react";
import { createBrowserRouter, RouterProvider, Outlet, } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import Address from "./pages/address/Address";
import Partner from "./pages/partner/Partner";
import Land from "./pages/land/Land";
import Marine from "./pages/marine/Marine";
import Constr from "./pages/constr/Constr";
import Scan from "./pages/scan/Scan";
import Sec from "./pages/sec/Sec";
import Events from "./pages/events/Events";
import Client from "./pages/client/Client";
import Geophy from "./pages/geophy/Geophy";
import Eng from "./pages/eng/Eng";
import Seis from "./pages/seis/Seis";
import Mini from "./pages/mini/Mini";
import Network from "./pages/network/Network";
import Case from "./pages/case/Case";
import Services from "./pages/services/Services";
import Moni from "./pages/moni/Moni";
import Dismoni from "./pages/dismoni/Dismoni";
import Bath from "./pages/bath/Bath";
//This is importing formsource.js file containing dynamic data in key value pairs. The userInputs, office and text are called here.
import { office } from "./formSource";
import { DarkModeContext } from "./context/darkModeContext";
import "./style/dark.scss";//Importing dark mode style
import Particle from "./components/Particle";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Preloader from "./preloader"; //import the Preloader component

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [isLoading, setIsLoading] = useState(true); // add state to track loading state

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // simulate loading delay for 2 seconds
  }, []);

  // Declaration of Layout
  const Layout = () => {
    return (
      // the Particle is the main background for all pages.
      <div className={darkMode ? "app dark" : "app"}>
        <div>
          <Particle />
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    );
  };

  // Browser router is created here using router v6
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // Calling layout
        <Layout />
      ),
      children: [
        // All children elements will route with layout
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/partner",
          element: <Partner />,
        },
        {
          path: "/clients",
          element: <Client />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/land",
          element: <Land />,
        },
        {
          path: "/marine",
          element: <Marine />,
        },
        {
          path: "/construction",
          element: <Constr />,
        },
        {
          path: "/geophysical",
          element: <Geophy />,
        },
        {
          path: "/engineering",
          element: <Eng />,
        },
        {
          path: "/scanning",
          element: <Scan />,
        },
        {
          path: "/security",
          element: <Sec />,
        },
        {
          path: "/seismic",
          element: <Seis />,
        },
        {
          path: "/mining",
          element: <Mini />,
        },
        {
          path: "/dismonitoring",
          element: <Dismoni />,
        },
        {
          path: "/monitoring",
          element: <Moni />,
        },
        {
          path: "/bathymetric",
          element: <Bath />,
        },
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/events",
          element: <Events />,
        },
        {
          path: "/address",
          element: <Address />,
        },
        {
          path: "/network",
          element: <Network />,
        },
        {
          path: "/case",
          element: <Case />,
        },
        {
          path: "/contact",
          element: <Contact content={office} />,
        },
      ],
    },

  ]);
  if (isLoading) {
    return <Preloader />;
  }

  return (
    // router here 
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
