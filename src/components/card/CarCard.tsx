import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddToCart } from '../../features/ShoppingCartSlice';
import { changeAvailabilityCar } from '../../features/CarSlice'; 
import { UpdateTotalPrice } from '../../features/ShoppingCartSlice';
import { toast } from "react-toastify";

interface CarCard {
  id: string;
  brand: string;
  model: string;
  year: number;
  engine:string;
  price: number;
  availability: boolean;
  premium?: boolean;
  img?: any;
}

interface CarCardProps {
  data: CarCard
}

function CarCard(props: CarCardProps)
{
     const dispatch = useDispatch();
     const [price, setPrice] = useState<number>(0);
     const PricePerDay:number = props.data.price;
     const [days, setDays] = useState<number>(1);
     

     useEffect(()=> {
        setPrice(days * PricePerDay);
        },[days])

     const AddElementToCard = ()=> {
      
        dispatch(AddToCart({
          id: props.data.id,
          type: "Car",
          days: days,
          price: price,
          pricePerDay: PricePerDay,
          item_name: props.data.brand + " " + props.data.model + " " + props.data.year
         }));
        dispatch(changeAvailabilityCar(props.data.id));
        dispatch(UpdateTotalPrice());
        toast.success('Item has been added!');
      }

     

     const triggerCard = (task:boolean) => {
      /* true = add, false = subtract */
      if(task)
      {
        setDays(days + 1);
        setPrice(days * PricePerDay);
        
      }
      else if(!task)
      {
        if(days === 1) return toast.error('The minimum value is 1.');
        setDays(days - 1);
        setPrice(days * PricePerDay);
        
      }
     }
    return(
    <Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%' }}>
      <Card.Img variant="top" className="mt-1" src={props.data.img}/>
         <Card.Body>
         {props.data.premium
             ? <span className="text-danger">★Premium★</span>
             : <span>&nbsp;</span>
            }
             <Card.Title><b>{props.data.brand} </b> {props.data.model}</Card.Title>
          
             <Card.Text>
                 <b>Year: </b> {props.data.year} <br/>
                 <b>Engine:</b> {props.data.engine}<br/>
                 <b>per</b> {days} <b>days</b> <button className="btn btn-dark btn-sm" onClick={() => triggerCard(true)}>+</button> <button className="btn btn-dark btn-sm" onClick={() => triggerCard(false)}> -</button>
              </Card.Text>
              <h4> Total cost: <b>{price}pln</b></h4><br/> 
        <div className="text-center">
            {props.data.availability
            ? <button className="btn btn-dark btn-lg" onClick={AddElementToCard}>Rent this car</button>
            : <button className="btn btn-danger btn-lg">Not available</button>
            }
        </div>
      </Card.Body>
    </Card>
    )
}

export default CarCard;