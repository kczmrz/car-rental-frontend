import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { graph } from '../../graph';
import './payForm.css';
import { Pencil } from 'react-bootstrap-icons';
import { toast } from "react-toastify";

interface paymentformprops {
    fullPrice: number;
    backToCart: VoidFunction;
}
function PaymentForm(props: paymentformprops)
{
    return(
<div style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto'}}>
    <div className='PayInvoice'> Pay Invoice</div>
    <Form className='fullPaymentForm'>
    <img src={graph.cardsLogo} className='cards-logo'/>
    <h4><b> Price:</b> {props.fullPrice}pln </h4>
     <h5> <p onClick={props.backToCart}><Pencil/> Edit cart</p></h5>
      <Form.Group className="mb-3">
        <Form.Label><b> Email address</b></Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label><b> Phone number</b></Form.Label>
        <Form.Control type="value" placeholder="Enter phone number"/> 
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label><b>Name and surname</b></Form.Label>
        <Form.Control type="text" placeholder="Enter your name and surname"/> 
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label><b>Your driving license scan</b></Form.Label>
        <Form.Control type="file" />
        <Form.Text>*as png, pdf, jpg, bmp</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label><b>Card number</b></Form.Label>
        <Form.Control type="value" placeholder="Enter your card number"/> 
        <Form.Label><b>Empiry date and security code</b></Form.Label>
        <div className='container'> 
        <div className='row'>
          <div className='col'> <Form.Control type="value" placeholder="MM/YY"/> </div>
          <div className='col'> <Form.Control type="value" placeholder="code"/> </div>
        </div>
        </div>
    </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="I accept the terms and conditions" />
      </Form.Group>
      <Button variant="success" className='w-100' onClick={()=> toast.success("It's only test-page")}>
        Pay {props.fullPrice} pln
      </Button>
    </Form>
   
</div>)
}

export default PaymentForm;