import { Outlet } from "react-router-dom";

import { Header } from "@layout/Header";
import { Footer } from "@layout/Footer";

export const Layout = () => {
  return (
    <div className="app-layout" style={{ marginTop: 100 }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
