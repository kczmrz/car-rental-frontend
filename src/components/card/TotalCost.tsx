import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useNavigate } from 'react-router-dom';
function TotalCost()
{
    const priceValue = useSelector((state: RootState)=> state.cart.totalPrice);
    const navigate = useNavigate();
     return(
     <div className="fixed-bottom mt-1 bg-dark py-3">
         <h2 className="text-light"> <b>Total cost: </b> {priceValue}pln </h2> 
         <button className="btn btn-lg btn-light" onClick={()=> navigate('/pay')}>Finish</button>
     </div>)
}

export default TotalCost;