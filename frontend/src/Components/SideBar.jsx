import "./css/SideBar.css"
const SideBar = () => {
    return (
        <div className="parent">
            <div className="container">

            
            <div className="color">
                <h4>Color</h4>
                <div className="colorRed">
                    <input type="checkbox" value="red" />
                    <p>Red</p>
                </div>
                <div className="colorBlue">
                    <input type="checkbox" value="blue" />
                    <p>Blue</p>
                </div>
                <div className="colorGreen">
                    <input type="checkbox" value="green" />
                    <p>Green</p>
                </div>

            </div>

            <div className="gender">
                <h4>Gender</h4>
                <div className="genderMen">
                    <input type="checkbox" value="men" />
                    <p>Men</p>
                </div>
                <div className="genderWomen">
                    <input type="checkbox" value="women" />
                    <p>women</p>
                </div>
              

            </div>

            <div className="price">
                <h4>Price</h4>
                <div className="childPrice1">
                    <input type="checkbox" value="0-250" />
                    <p>0-Rs.250</p>
                </div>
                <div className="childPrice2">
                    <input type="checkbox" value="250-450" />
                    <p>Rs.251-Rs.450</p>
                </div>
                <div className="childPrice3">
                    <input type="checkbox" value="450" />
                    <p>Rs.450</p>
                </div>

            </div>

            <div className="types">
                <h4>Types</h4>
                <div className="polo">
                    <input type="checkbox" value="polo" />
                    <p>Polo</p>
                </div>
                <div className="hoodie">
                    <input type="checkbox" value="hoodie" />
                    <p>Hoodie</p>
                </div>
                <div className="basic">
                    <input type="checkbox" value="basic" />
                    <p>Basic</p>
                </div>

            </div>
        </div>
        </div>
    )
}
export default SideBar;