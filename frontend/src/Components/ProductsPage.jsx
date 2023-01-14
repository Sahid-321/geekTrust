import { useEffect, useState } from "react";
import "./css/ProductsPage.css"
import SideBar from "./SideBar";

const ProductsPage = () => {
    let productsURL = "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";
    const [showProductsData, setShowProductsData] = useState([]);

    useEffect(() => {
        fetch(productsURL)
            .then((res) => res.json())
            .then((data) => setShowProductsData(data))
            .catch((err) => console.log(err))
    }, []);

    return (
        <>

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
                                    <button>Add to Cart</button>
                                </div>


                            </div>
                        )
                    })
                }
            </div>
            </div>
        </>
    )
}
export default ProductsPage;