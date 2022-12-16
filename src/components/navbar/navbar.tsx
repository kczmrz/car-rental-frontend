import * as Icon from 'react-bootstrap-icons';
import { graph } from '../../graph';
import { Basket } from 'react-bootstrap-icons';
import '../navbar/navbar.css';

interface NavbarProps {
    navigate1: VoidFunction,
    navigate2: VoidFunction
}
function Navbar(props: NavbarProps)
{
    
    return(
    <div className='navbar bg-dark fixed-top'>
        <div className='container-fluid'>
            <button className='navbar-brand text-light ms-3 main-logo' onClick={props.navigate2} ><img src={graph.logo} height="46"/></button>
            <div className='d-flex'>
                
                <button className='text-light text-lg me-4 a-cart' onClick={props.navigate1}> <Basket size={35} /> </button>
            </div>
        </div>

    </div>
   )
}

export default Navbar;