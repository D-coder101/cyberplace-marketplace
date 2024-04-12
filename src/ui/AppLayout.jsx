import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function AppLayout() {
  return (
    <div className="App">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
