import cartIcon from "../icons/cartIcon.png"
import "./css/HeaderPage.css"
const HeaderPage = ({setShow}) => {

    return (
        <div className="parentHeader">
            <div className="containerHeader">
                <p onClick={()=>setShow(true)}>Products</p>
                <img onClick={()=> setShow(false)} src={cartIcon} />
            </div>
        </div>
    )
}
export default HeaderPage;