import ShoppingCartCard from "../components/card/shoppingCard/ShoppingCartCard";
import TotalCost from "../components/card/TotalCost";
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from "react-bootstrap-icons";
import Navbar from "../components/navbar/navbar";


function Cart()
{
    const ShoppingCart = useSelector((state: RootState)=> state.cart.items);
    const navigate = useNavigate();
    return(
  <div className="container">
    <Navbar navigate1={()=> navigate('/cart ')} navigate2={()=> navigate('/')}/>
    <br/><br/><br/><br/>
    <button className="btn btn-dark" onClick={()=> navigate('/')}><ArrowLeft/> Back to shop</button>
    <div className="text-center">
        <h2><b>Your cart:</b></h2>
         {ShoppingCart.map((cart, index) => {return <ShoppingCartCard key={index} data={cart} />})}
 
        <div className="py-5">&nbsp;</div>
        <TotalCost/>
     </div>
  </div>)
}

export default Cart;