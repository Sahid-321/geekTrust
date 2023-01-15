import { useState } from "react";
import CartPage from "./Components/CartPage";
import HeaderPage from "./Components/HeaderPage";
import ProductsPage from "./Components/ProductsPage";

const App = () => {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([]);

  const handleAddToCart = (elem) => {
    if (cart.indexOf(elem) !== -1) return;
    setCart([...cart, {
      data: elem,
      amount: 1
    }]);




  };

  const handleIncrease = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    if (arr[ind].amount < item.data.quantity) {
      arr[ind].amount += d;
    } else {
      alert("Item limit exceeded")
    }


    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const handleDecrease = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;

    arr[ind].amount += d;



    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    <div>

      <HeaderPage setShow={setShow} />

      {show ? (<ProductsPage handleAddToCart={handleAddToCart} />) :
        (<CartPage cart={cart} setCart={setCart} handleIncrease={handleIncrease} handleDecrease={handleDecrease} />)}

    </div>
  );
}

export default App;
