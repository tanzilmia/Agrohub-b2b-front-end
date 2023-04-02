import BasicSettings from "./BasicSettings";
import DashboardSettingNav from "./DashboardSettingNav";

export default function DashboardSettings() {
  return (
    <div>
      <DashboardSettingNav />
      <div className="m-12">
        <BasicSettings />
      </div>
    </div>
  );
}
