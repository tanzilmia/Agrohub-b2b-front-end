import { Outlet } from "react-router-dom";
import DashboardSettingNav from "./DashboardSettingNav";

export default function DashboardSettings() {
  return (
    <div>
      <DashboardSettingNav />
      <div className="my-12 md:mx-12">
        <Outlet/>
      </div>
    </div>
  );
}
