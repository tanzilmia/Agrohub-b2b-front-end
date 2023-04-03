import BasicSettings from "./BasicSettings";
import DashboardSettingNav from "./DashboardSettingNav";

export default function DashboardSettings() {
  return (
    <div>
      <DashboardSettingNav />
      <div className="my-12 md:mx-12">
        <BasicSettings />
      </div>
    </div>
  );
}
