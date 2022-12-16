import { Card, Button, Container, Row, Col } from "react-bootstrap";
import './shoppingCartCard.css'
import { CartItem } from "../../../features/ShoppingCartSlice";
import { DeleteCartElement, UpdateTotalPrice } from '../../../features/ShoppingCartSlice';
import { changeAvailabilityCar } from "../../../features/CarSlice";
import { changeAvailabilityAccessory } from '../../../features/AccesoriesSlice';
import { useDispatch } from 'react-redux';
import EditModal from './EditModal';
import { toast } from 'react-toastify';

interface shoppingCartProps {
    data: CartItem;
}



function ShoppingCartCard(props: shoppingCartProps) {

  const dispatch = useDispatch();


   

 
  const DeleteElementFromCart = () => {
    if(props.data.type === "Car"){
    dispatch(changeAvailabilityCar(props.data.id))}
    if(props.data.type === "Accessory"){
      dispatch(changeAvailabilityAccessory(props.data.id))}
    dispatch(DeleteCartElement(props.data.id));
    dispatch(UpdateTotalPrice());
    toast.success('Item has been deleted');
    
   }

  return (
    <div className="shoppingCart mt-4"> 
      <Card className="text-center">
        <Card.Header>Item</Card.Header>
        <Card.Body>
         <Container> 
            <Row> 

               <Col> 
                  <Card.Title><b>{props.data.type} </b></Card.Title>
                  <Card.Text>
                   {props.data.item_name}
                  </Card.Text>
               </Col>

               <Col> 
                  <b>days</b> <br/>
                  <h2>{props.data.days}</h2> 
               </Col>
               <Col>
               <EditModal data={props.data} />
               </Col>
               <Col> 
                 <h3 className="mt-3">Price: <b>{props.data.price} pln</b></h3>
                  
               </Col>

            </Row>
          </Container>
          <Button className="mt-4" style={{width: "40%"}} variant="danger" onClick={DeleteElementFromCart}>Delete</Button>
        </Card.Body>
        <Card.Footer className="text-muted">&nbsp;</Card.Footer>
      </Card>
    </div>
    );
  }
  
  export default ShoppingCartCard;