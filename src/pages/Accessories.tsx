import Navbar from '../components/navbar/navbar';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../app/store';
import { useNavigate } from 'react-router-dom';
import Filter from '../components/Filter/filter';
import PageFooter from '../components/footer/PageFooter';
import Navigation from '../components/navigation/navigation';
import AccessoryCard from '../components/card/AccessoryCard/AccessoryCard';
import { ChangePriceFilter } from "../features/FilterBarSlice";


function Accessories(){
    const Accessories = useSelector((state: RootState)=> state.accessories.value);
    const minMaxValue = useSelector((state: RootState)=> state.filterPrices);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const NavigationBtnTrigger = (page:string) => {
        navigate(page);
        dispatch(ChangePriceFilter({min: 1, max: 9999}));
      }

    return(
        <div>
             <Navbar navigate1={()=> navigate('/cart ')} navigate2={()=> navigate('/ ')}/>
             <Container style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '6rem'}} className="d-flex flex-column min-vh-100"> 
                 <Filter/>
                 <Navigation btnVariant={2} btnFunc1={()=> NavigationBtnTrigger('/')} btnFunc2={()=> NavigationBtnTrigger('/accessories')}/>
                 {Accessories.map((accessory, index)=> {
                  if(accessory.price >= minMaxValue.min && accessory.price <= minMaxValue.max) 
                  return <AccessoryCard data={accessory} key={index}/> })}

                 
             </Container>
             <PageFooter/>
        </div>)
}
export default Accessories;