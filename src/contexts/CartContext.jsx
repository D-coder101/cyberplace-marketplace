import { createContext, useContext, useState } from "react";

const CartContext = createContext();


const shopData = [
  {
    name: "Brocade Dress",
    amount: "50,000",
    id: 11920,
    img: "images/brocade_dress.png",
    size: 10,
    quantity: 1
  },
  {
    name: "Shoulder Bags",
    amount: "50,000",
    id: 11921,
    img: "images/bags.png",
    size: 12,
    quantity: 1
  },
  {
    name: "Heels Sandals",
    amount: "40,000",
    id: 11922,
    img: "images/shoes.png",
    size: 16,
    quantity: 1
  },
];

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const products = shopData;


  function handleAddItemsToCart(item) {
    setCart((items) => [item, ...items]);
  }
  
  const increaseQuantity = (itemId) => {
    const updatedCart = cart.map(innerArray =>
      innerArray.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cart.map(innerArray =>
      innerArray.map(item => {
        if (item.id === itemId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
    setCart(updatedCart);
  };
  const handleDeleteItemsFromCart = (itemId) => {
    const updatedCart = cart.map(innerArray =>
      innerArray.filter(item => item.id !== itemId)
    );
    const filteredCart = updatedCart.filter(innerArray => innerArray.length > 0);

    setCart(filteredCart);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        increaseQuantity,
        decreaseQuantity,
        cart,
        handleAddItemsToCart,
        handleDeleteItemsFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCarts() {
    const context = useContext(CartContext);
    if(context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
    return context;
}

export { CartProvider, useCarts }