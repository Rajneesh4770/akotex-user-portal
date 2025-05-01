
import SettingsTabs from "@/components/settings/SettingsTabs";

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <SettingsTabs />
    </div>
  );
};

export default SettingsPage;
