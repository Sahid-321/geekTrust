import cartIcon from "../icons/cartIcon.png"
import "./css/HeaderPage.css"
import { useNavigate } from "react-router-dom"
const HeaderPage = () => {
    const navigate = useNavigate();
    const handleClickCart = ()=>{
        navigate("/cartpage")
    }
    return (
        <div className="parentHeader">
            <div className="containerHeader">
                <p>Products</p>
                <img onClick={handleClickCart} src={cartIcon} />
            </div>
        </div>
    )
}
export default HeaderPage;