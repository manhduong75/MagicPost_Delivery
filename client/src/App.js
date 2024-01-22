import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import HeadGathering from "./pages/HeadGathering/HeadGathering.jsx";
import Gathering from "./pages/Gathering/Gathering.jsx";
import HeadTransaction from "./pages/HeadTransaction/HeadTransaction.jsx";
import Transaction from "./pages/Transaction/Transaction.jsx";
import Headbar from "./components/Headbar/Headbar.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Search from "./components/Search/Search.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import CreateOrder from "./components/CreateOrder/CreateOrder.jsx";
import axios from "axios";
import SidebarItem from "./components/SidebarItem/SidebarItem.jsx";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("user"));
    if (item) setUser(item);
  }, []);

  console.log(user);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Headbar user={user} />
          <Menu />
          <Banner />
          <Search />
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: user ? <Navigate to="/transaction" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
    {
      path: "/admin",
      element:
        user && user.role && user.role === "ADMIN" ? (
          <>
            <Headbar user={user} />
            <Admin />
          </>
        ) : (
          <Navigate to="/" />
        ),
    },
    {
      path: "/headtransaction",
      element:
        user && user.role && user.role === "HEAD_TRANSACTION" ? (
          <>
            <Headbar user={user} />
            <HeadTransaction />
          </>
        ) : (
          <Navigate to="/" />
        ),
    },
    {
      path: "/transaction",
      element:
        user && user.staff_id && user.staff_id[0] === "T" ? (
          <>
            <Headbar user={user} />
            <Transaction />
          </>
        ) : (
          <Navigate to="/" />
        ),
    },
    {
      path: "/headgathering",
      element:
        user && user.role && user.role === "HEAD_GATHERING" ? (
          <>
            <Headbar user={user} />
            <HeadGathering />
          </>
        ) : (
          <Navigate to="/" />
        ),
    },
    {
      path: "/gathering",
      element:
        user && user.staff_id && user.staff_id[0] === "C" ? (
          <>
            <Headbar user={user} />
            <Gathering />
          </>
        ) : (
          <Navigate to="/" />
        ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
