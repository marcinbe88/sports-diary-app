import { UserPanelSettings } from "../components/UserPanelSettings/UserPanelSettings";
import { UserPanelNavBar } from "../components/UserPanelNavBar/UserPanelNavBar";

export function UserPanelSet() {
  return (
    <>
      <UserPanelNavBar />
      <UserPanelSettings />
    </>
  );
}
