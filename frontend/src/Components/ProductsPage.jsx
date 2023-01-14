import { useEffect, useState } from "react";
import "./css/ProductsPage.css"
import SideBar from "./SideBar";
import CartPage from "./CartPage";
import HeaderPage from "./HeaderPage";
const ProductsPage = () => {
    let productsURL = "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";
    const [showProductsData, setShowProductsData] = useState([]);
    const [cartItem, setCartItem] = useState([])
    useEffect(() => {
        fetch(productsURL)
            .then((res) => res.json())
            .then((data) => setShowProductsData(data))
            .catch((err) => console.log(err))
            
    }, []);

    const handleAddToCart = (id)=>{
       showProductsData.map((elem)=>{
        if(id === elem.id){
            setCartItem((prev)=>{
            return [...prev,elem]
            })
        }
       })
      
    }

    return (
        <>
 <HeaderPage/>

<div className="searchItems">
<input placeholder="Search for products..." />
<button>Search</button>
</div>
<div className="leftAllignSideBar">
<SideBar/>
            <div className="items">
                {
                    showProductsData.map((elem) => {
                        return (
                            <div className="childItems" key={elem.id}>
                                <p><b>{elem.name}</b></p>
                                <div className="itemImage">
                                    <img src={elem.imageURL} />
                                </div>

                                <div className="itemPriceCart">
                                    <p>Rs.{elem.price}</p>
                                    <button onClick={()=>handleAddToCart(elem.id)}>Add to Cart</button>
                                </div>


                            </div>
                        )
                    })
                }
            </div>
            </div>
            <CartPage props={cartItem}/>
        </>
    )
}
export default ProductsPage;