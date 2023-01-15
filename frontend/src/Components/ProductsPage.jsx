import { useEffect, useState } from "react";
import "./css/ProductsPage.css"
import "./css/SideBar.css"


const ProductsPage = ({ handleAddToCart }) => {
    let productsURL = "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";
    const [showProductsData, setShowProductsData] = useState([]);
    const [searchFilter, setSearchFilter] = useState("")
    const [colorFilter, setColorFilter] = useState("")
    const [gender, setGender] = useState("")
    const [priceFilter, setPriceFilter] = useState("")
    const [typeFilter, setTypeFilter] = useState("")
    const [showFilterBtn, setShowFilterBtn] = useState("hideParent")
    const [cssClassItem, setCssClassItem] = useState("items")

    useEffect(() => {
        fetch(productsURL)
            .then((res) => res.json())
            .then((data) => setShowProductsData(data))
            .catch((err) => console.log(err))

    }, []);

    const handleFilter = () => {

        setCssClassItem("itemHide")
        setShowFilterBtn("parent")
    }

    const handleShowHideFilter = () => {
        setShowFilterBtn('hideParent')
        setCssClassItem("items")

    }

    console.log(priceFilter);

    return (
        <div className="main">



            <div className="searchItems">
                <input placeholder="Search for products..." onChange={(e) => setSearchFilter(e.target.value)} />
                <button>Search</button>

                <div className="filterBtn">
                    <button onClick={handleFilter}>Filter</button>
                </div>
            </div>

            <div className="leftAlignSideBar">
                <div className={showFilterBtn}>



                    <div className="container">


                        <div className="color">
                            <h4>Color</h4>
                            <div className="colorRed">
                                <input type="checkbox" value="Red" onClick={handleShowHideFilter} onChange={(e) => setColorFilter(e.target.value)} />
                                <p>Red</p>
                            </div>
                            <div className="colorBlue">
                                <input type="checkbox" value="Blue" onClick={handleShowHideFilter} onChange={(e) => setColorFilter(e.target.value)} />
                                <p>Blue</p>
                            </div>
                            <div className="colorGreen">
                                <input type="checkbox" value="Green" onClick={handleShowHideFilter} onChange={(e) => setColorFilter(e.target.value)} />
                                <p>Green</p>
                            </div>

                        </div>

                        <div className="gender">
                            <h4>Gender</h4>
                            <div className="genderMen">
                                <input type="checkbox" value="Men" onClick={handleShowHideFilter} onChange={(e) => setGender(e.target.value)} />
                                <p>Men</p>
                            </div>
                            <div className="genderWomen">
                                <input type="checkbox" value="Women" onClick={handleShowHideFilter} onChange={(e) => setGender(e.target.value)} />
                                <p>women</p>
                            </div>


                        </div>

                        <div className="price">
                            <h4>Price</h4>
                            <div className="childPrice1">
                                <input type="checkbox" value="250" onClick={handleShowHideFilter} onChange={(e) => setPriceFilter(250)} />
                                <p>0-Rs.250</p>
                            </div>
                            <div className="childPrice2">
                                <input type="checkbox" value="450" onClick={handleShowHideFilter} onChange={(e) => setPriceFilter(450)} />
                                <p>Rs.251-Rs.450</p>
                            </div>
                            <div className="childPrice3">
                                <input type="checkbox" value="451" onClick={handleShowHideFilter} onChange={(e) => setPriceFilter(500)} />
                                <p>Rs.451 - Rs.500</p>
                            </div>

                        </div>

                        <div className="types">
                            <h4>Types</h4>
                            <div className="polo">
                                <input type="checkbox" value="Polo" onClick={handleShowHideFilter} onChange={(e) => setTypeFilter(e.target.value)} />
                                <p>Polo</p>
                            </div>
                            <div className="hoodie">
                                <input type="checkbox" value="Hoodie" onClick={handleShowHideFilter} onChange={(e) => setTypeFilter(e.target.value)} />
                                <p>Hoodie</p>
                            </div>
                            <div className="basic">
                                <input type="checkbox" value="Basic" onClick={handleShowHideFilter} onChange={(e) => setTypeFilter(e.target.value)} />
                                <p>Basic</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={cssClassItem}>
                    {

                        showProductsData.
                            filter((value) => {
                                if (searchFilter === "") {
                                    return value;

                                } else if (value.name.toLowerCase().includes(searchFilter.toLowerCase())) {
                                    return value;
                                }

                            }).
                            filter((value) => {
                                if (colorFilter === "") {
                                    return value
                                } else {
                                    return value.color === colorFilter
                                }

                            }).
                            filter((value) => {
                                if (gender === "") {
                                    return value
                                } else {
                                    return value.gender === gender
                                }

                            }).
                            filter((value) => {
                                if (priceFilter === "") {
                                    return value
                                }

                                return value.price <= priceFilter


                            }).
                            filter((value) => {
                                if (typeFilter === "") {
                                    return value
                                }

                                return value.type === typeFilter

                            }).
                            map((elem) => {

                                return (

                                    <div className="childItems" key={elem.id}>

                                        <p><b>{elem.name}</b></p>
                                        <div className="itemImage">
                                            <img src={elem.imageURL} />
                                        </div>

                                        <div className="itemPriceCart">
                                            <p>Rs.{elem.price}</p>
                                            <button onClick={() => handleAddToCart(elem, alert("Item Added in cart"))}>Add to Cart</button>
                                        </div>


                                    </div>
                                )
                            })
                    }
                </div>

            </div>

        </div>
    )
}
export default ProductsPage;