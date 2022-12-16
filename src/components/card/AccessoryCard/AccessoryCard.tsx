import { Card, Container, Row, Col } from "react-bootstrap";
import { Accessories } from "../../../features/AccesoriesSlice";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/store";
import { AddToCart, CartItem } from '../../../features/ShoppingCartSlice';
import { UpdateTotalPrice } from '../../../features/ShoppingCartSlice';
import { changeAvailabilityAccessory } from '../../../features/AccesoriesSlice';
import { toast } from "react-toastify";
import './AccessoryCard.css';

interface AccessoryCardProps {
  data: Accessories
}

function AccessoryCard(props: AccessoryCardProps) {
    const [AccessoryPrice, setAccessoryPrice] = useState<number>(props.data.price);
    const [AccessoryDays, setAccessoryDays] = useState<number>(props.data.days);
    const [DataForCart, setDataforCart] = useState<CartItem>({id: "", type: "", days: 1, price: 0, pricePerDay: 0, item_name: ""});

    const TotalPrice = useSelector((state: RootState)=> state.cart.totalPrice);
    
    const dispatch = useDispatch();
    
    useEffect(()=> {
      setAccessoryPrice(AccessoryDays * props.data.price);
     }, [AccessoryDays]);

      const AddElementToCart = ()=> {
        
        dispatch(AddToCart({
          id: props.data.id,
          type: "Accessory",
          days: AccessoryDays,
          price: AccessoryPrice,
          pricePerDay: props.data.price,
          item_name: props.data.name
         }));
        dispatch(UpdateTotalPrice());
        dispatch(changeAvailabilityAccessory(props.data.id));
        toast.success('Item has been added!');
        
      }

   
    


    const EditAccessoryDays = (AddSub:boolean) => {
     if(!AddSub) {
      if(AccessoryDays <= 1) { return toast.error('The minimum value is 1.'); }
      else {
        setAccessoryDays(AccessoryDays - 1);
      };
      } else {
        setAccessoryDays(AccessoryDays + 1);
      }
      
    }
    
    return(
        <Card className="mt-3 text-center AcsCard" >
        <Card.Header>Accessory</Card.Header>
        <Card.Body>
          <Card.Title><h2><b>{props.data.name} </b></h2></Card.Title>
           <hr/>
          <Container>
            <Row>
              <Col><h4> Days:</h4> </Col>
              <Col className="mt-1"><h3> <b> {AccessoryDays}</b> </h3></Col>
              <Col><button className="btn btn-dark" onClick={() => EditAccessoryDays(true)}> + </button> &nbsp;<button className="btn btn-dark" onClick={() => EditAccessoryDays(false)}> - </button></Col>
              
            </Row>
           <hr/>
          
            <Row className="mt-2">
              <Col><h4>Price: </h4></Col>
              <Col><h3><b> {AccessoryPrice} pln</b></h3></Col>
            </Row>
          </Container>
           {props.data.availability
            ?<button className="btn btn-primary btn-lg" onClick={AddElementToCart}>Add to cart!</button>
            :<button className="btn btn-danger btn-lg">Not avaible</button> 
          }
        </Card.Body>
      </Card>
    )
}

export default AccessoryCard;