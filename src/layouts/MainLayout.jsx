import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div>
      <div className="h-[81px]">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-133px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
