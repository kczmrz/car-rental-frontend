import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './navigation.css';


interface NavigationProps {
    btnVariant: number;
    btnFunc1: VoidFunction;
    btnFunc2: VoidFunction;
}

interface navibtns {
    btn1: string;
    btn2: string;
}
function Navigation(props: NavigationProps)
{
    const [btns, SetBtns] = useState<navibtns>({btn1: "btn btn-light w-100", btn2: "btn btn-dark w-100"});
    useEffect(()=> {
      switch(props.btnVariant){
        case 1:
            SetBtns({btn1: "btn btn-light w-100", btn2: "btn btn-dark w-100"});
            break;
        case 2:
            SetBtns({btn1: "btn btn-dark w-100", btn2: "btn btn-light w-100"});
            break;
      }
    }, [])
    
    return(
        <div className="bg-dark mt-3 w-75 px-3 py-3 navigation">
            <Container>
            <Row className='text-center'>
                <Col><button className={btns.btn1} onClick={props.btnFunc1}> Cars </button></Col>
                <Col><button className={btns.btn2} onClick={props.btnFunc2}> Accessories </button> </Col>
            </Row>
            </Container>
        </div>
    )
}


export default Navigation;