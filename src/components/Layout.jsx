import { Outlet } from "react-router-dom";
import Content from "./Content";
import Header from "./Header";
import Hero from "./Hero";

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
