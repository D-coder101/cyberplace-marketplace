import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { CartProvider } from "../contexts/CartContext";

function AppLayout() {
  return (
    <div className="App">
      <CartProvider>
        <Header />

        <main>
          <Outlet />
        </main>
      </CartProvider>
    </div>
  );
}

export default AppLayout;
