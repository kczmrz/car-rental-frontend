import { Github } from "react-bootstrap-icons";

function PageFooter()
{
    return(
        <footer className='text-center mt-5 mb-0 p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
        Check my github: &nbsp;
        <a className='text-reset fw-bold text-decoration-none' href='https://github.com/kczmrz'>
       <b><Github/>KCZMRZ</b>
        </a>
      </footer>
    )
}

export default PageFooter;