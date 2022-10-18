import React, { useState } from "react";
import CartProvider from "./store/CartProvider";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCratIsShown] = useState(false);
  const showCartHandler = () => {
    setCratIsShown(true);
  };
  const hideCartHandler = () => {
    setCratIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart hideCartPointer={hideCartHandler} />}
      <Header showCartPointer={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
