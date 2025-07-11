import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div>
      <div className="h-[81px]">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}
