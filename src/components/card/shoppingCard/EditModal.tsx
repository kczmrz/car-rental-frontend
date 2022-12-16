import react, { useState } from 'react';
import { Modal } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { ChangeDaysCounter, ChangePrice, UpdateTotalPrice } from '../../../features/ShoppingCartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CartItem } from "../../../features/ShoppingCartSlice";
import { toast } from 'react-toastify';


interface ModalProps {
  data: CartItem;
}
function EditModal(props: ModalProps){
    const [modalDisplay, setModalDisplay] = useState<boolean>(false);
    const [modalCounter, setmodalCounter] = useState<number>(props.data.days);
    const pricePerOneDay = props.data.pricePerDay;
    const DefaultDays = props.data.days;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const AddDays = ()=> {
      setmodalCounter(modalCounter+1);
      
    }

    const SubtractDays = ()=> {
      if(modalCounter <= 1) return;
      setmodalCounter(modalCounter-1);
      
    }


    const SaveChanges = ()=> {
      const fullPrice = pricePerOneDay * modalCounter;
      setModalDisplay(false);
      dispatch(ChangeDaysCounter({id: props.data.id, nmbr: modalCounter}));
      dispatch(ChangePrice({id: props.data.id, nmbr: fullPrice}));
      dispatch(UpdateTotalPrice());
      toast.success('Item has been updated');
      
    }
    

    return(
    <>
        <button className="btn btn-secondary mt-3" onClick={() => setModalDisplay(true)}>Edit <Pencil/> </button>

        <Modal show={modalDisplay} onHide={()=> setModalDisplay(false)}>
          <Modal.Header closeButton>
             <Modal.Title>Edit days</Modal.Title>
          </Modal.Header>
          <Modal.Body><h1>{modalCounter} <button className='btn btn-sm btn-primary' onClick={AddDays}>+</button> <button className='btn btn-sm btn-danger' onClick={SubtractDays}>-</button></h1></Modal.Body>
             <Modal.Footer>
                 <button className='btn btn-secondary' onClick={()=> setModalDisplay(false)}>
                    Close
                 </button>
                 <button className='btn btn-primary' onClick={SaveChanges}>
                   SAVE
                 </button>
             </Modal.Footer>
        </Modal>
    </>
    )
}


export default EditModal;