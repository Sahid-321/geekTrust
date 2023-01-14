import { useState } from "react";
import CartPage from "./Components/CartPage";
import HeaderPage from "./Components/HeaderPage";
import ProductsPage from "./Components/ProductsPage";


const App = () => {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([]);

  const handleAddToCart = (elem) => {
    if (cart.indexOf(elem) !== -1) return;
    setCart([...cart, elem]);
  };

  const handleChange = (item, d) => {
    const index = cart.indexOf(item);
    const arr = cart;
    arr[index].amount += d;

    if (arr[index].amount === 0) arr[index].amount = 1;
    setCart([...arr]);
  };

  return (
    <div>
      <HeaderPage setShow={setShow} />
      {show ? (<ProductsPage handleAddToCart={handleAddToCart} />) :
       (<CartPage cart={cart} setCart={setCart} handleChange={handleChange}/>)}

    </div>
  );
}

export default App;
