import CartPage from "./Components/CartPage";
import ProductsPage from "./Components/ProductsPage";
import {Route, Routes} from "react-router-dom"


const App = ()=>{
  return (
    <div>
     <Routes>
      <Route path="/" element={<ProductsPage/>} />
      <Route path="/cartpage" element={<CartPage/>} />
     </Routes>
      
      
      
    </div>
  );
}

export default App;
