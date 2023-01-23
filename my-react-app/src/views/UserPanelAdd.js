import { UserPanelAddResult } from "../components/UserPanelAddResult/UserPanelAddResult";
import { UserPanelNavBar } from "../components/UserPanelNavBar/UserPanelNavBar";

export function UserPanelAdd() {
  return (
    <>
    <UserPanelNavBar />
      <UserPanelAddResult />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserPanel />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userpanel" element={<UserPage />} />
        </Routes>
      </BrowserRouter> */}

    </>
  );
}
