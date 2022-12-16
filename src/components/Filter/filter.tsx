import { Form } from "react-bootstrap";
import '../Filter/filter.css';
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useState } from 'react';
import { ChangePriceFilter } from "../../features/FilterBarSlice";




function Filter()
{
    const priceValue = useSelector((state: RootState)=> state.filterPrices);
    const [minValue, setMinValue] = useState<number>(priceValue.min);
    const [maxValue, setMaxValue] = useState<number>(priceValue.max);
    const dispatch = useDispatch();
    
    const HandleFilterBtn = () => {
        dispatch(ChangePriceFilter({min: minValue, max: maxValue}));
     }
    return(
    <div className="w-100 py-3 filterBG ">
      <Container className="w-75" > 
        <p className="text-white fs-3">Filter by price</p>
             <Row>
                <Col><Form.Control type="number" min="1" placeholder="min" value={minValue || ''} onChange={(e)=> setMinValue(parseInt(e.target.value))} /></Col>
                <Col><Form.Control type="number" min="1" placeholder="max" value={maxValue || ''} onChange={(e)=> setMaxValue(parseInt(e.target.value))}  /></Col>
                <Col><button className="btn btn-primary filter_bar_btn" onClick={HandleFilterBtn}>Filter!</button></Col>
             </Row>
      </Container>
    </div>
    )
}

export default Filter;