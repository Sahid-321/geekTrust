import { useEffect, useState } from "react";
import "./css/CartPage.css"
const CartPage = ({ cart, setCart, handleIncrease, handleDecrease }) => {


    const [price, setPrice] = useState(0);
    const [value, setValue] = useState(cart)

    const handleDelete = (id) => {
        const arr = cart.filter((item) => item.data.id !== id);
        setCart(arr);
        handlePrice();

    };

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.data.price));
        setPrice(ans);
    };
    useEffect(() => {
        handlePrice();
    });
    console.log(cart);
    return (
        <>

            <h3>Shopping Cart</h3>
            <div className="cartContainer">
                {cart.map((elem) => {
                    return (
                        <div className="cartChild" key={elem.id} >
                            <img src={elem.data.imageURL} />
                            <div className="namePrice">
                                <p>{elem.data.name}</p>
                                <p>Rs. {elem.data.price}</p>
                            </div>

                            <div className="handleButton">

                                <button onClick={() => handleIncrease(elem, 1)}>+</button>

                                <button>{elem.amount}</button>
                                <button onClick={() => handleDecrease(elem, -1)}>-</button>
                            </div>

                            <button onClick={() => handleDelete(elem.data.id)}>Delete</button>
                        </div>
                    )
                })

                }
                <div className="totalPrice">
                    <ul />
                    <b><p>Total.{price}/-</p></b>
                </div>
            </div>
        </>
    )
}
export default CartPage;