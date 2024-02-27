import { Outlet, Link } from "react-router-dom";
import {Navbar} from "./components/Navbar";
const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  )
};

export default Layout;