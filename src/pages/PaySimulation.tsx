import Navbar from "../components/navbar/navbar";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../app/store';
import PaymentForm from "../components/payComponents/payForm";
import PageFooter from '../components/footer/PageFooter';


export default function PayPage() {
    const fullPrice = useSelector((state: RootState)=> state.cart.totalPrice);
    const navigate = useNavigate();
    return(<> 
    <div className="container min-vh-100">
        <Navbar navigate1={()=> navigate('/cart ')} navigate2={()=> navigate('/')}/>
        <br/><br/><br/><br/>
        
        <PaymentForm fullPrice={fullPrice} backToCart={()=>navigate('/cart')} />
    </div>
    <PageFooter/></>)
}