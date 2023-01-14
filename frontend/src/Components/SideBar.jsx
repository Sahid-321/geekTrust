import "./css/SideBar.css"
const SideBar = () => {
    return (
        <div className="parent">
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
        </div>
    )
}
export default SideBar;