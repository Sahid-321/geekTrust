import { useEffect, useState } from "react";
import HeaderPage from "./HeaderPage";
import "./css/CartPage.css"
const CartPage = ({ cart, setCart, handleChange }) => {
    const [cartData, setCartData] = useState([])

    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    };

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.quantity * item.price));
        setPrice(ans);
    };


    return (
        <>

            <h3>Shopping Cart</h3>
            <div className="cartContainer">
                {cart.map((item) => (
                    <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                            <img src={item.imageURL} alt="" />
                            <p>{item.name}</p>
                        </div>
                        <div>
                            <button onClick={() => handleChange(item, 1)}>+</button>
                            <button>{item.quantity}</button>
                            <button onClick={() => handleChange(item, -1)}>-</button>
                        </div>
                        <div>
                            <span>{item.price}</span>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
                <div className="total">
                    <span>Total Price of your Cart</span>
                    <span>Rs - {price}</span>
                </div>

            </div>
        </>
    )
}
export default CartPage;