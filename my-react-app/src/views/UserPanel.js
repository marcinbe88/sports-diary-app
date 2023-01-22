import { UserPanel } from "../components/UserPanel/UserPanel";

export function UserPage() {
  return (
    <>
      <UserPanel />

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
