import Navbar from '../components/navbar/navbar';
import CarCard from '../components/card/CarCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../app/store';
import { useNavigate } from 'react-router-dom';
import Filter from '../components/Filter/filter';
import PageFooter from '../components/footer/PageFooter';
import Navigation from '../components/navigation/navigation';
import { ChangePriceFilter } from "../features/FilterBarSlice";

function CarsForRent() {
const Cars = useSelector((state: RootState)=> state.cars.value);
const minMaxValue = useSelector((state: RootState)=> state.filterPrices);
const navigate = useNavigate();
const dispatch = useDispatch();

  const NavigationBtnTrigger = (page:string) => {
    navigate(page);
    dispatch(ChangePriceFilter({min: 1, max: 9999}));
  }
  return (
    <div>
      <Navbar navigate1={()=> navigate('/cart ')} navigate2={()=> navigate('/ ')}/>
      <Container style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '6rem'}} className="d-flex flex-column min-vh-100"> 
      <Filter/>
       <Navigation btnVariant={1} btnFunc1={()=> NavigationBtnTrigger('/')} btnFunc2={()=> NavigationBtnTrigger('/accessories')}/>
       <Row lg={3}> 
          {Cars.map((model, index)=> {
            if(model.price >= minMaxValue.min && model.price <= minMaxValue.max) return <Col key={index}><CarCard key={index} data={model}/></Col>
            
            })}
        </Row>
      </Container>
      <PageFooter/>
    </div>
  );
}

export default CarsForRent;
