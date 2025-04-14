import { Navbar, Nav, Container } from 'react-bootstrap';
 import { FaUser, FaBeer } from 'react-icons/fa';
 import  Logo  from '../assets/logo.png';
 
 const Header = () => {
   return (
     <header>
       <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
         <Container>
           <Navbar.Brand href='/'>
           <img src={Logo} alt="ProShopp" />
           ProShop
           </Navbar.Brand>
           <Navbar.Toggle aria-controls='basic-navbar-nav' />
           <Navbar.Collapse id='basic-navbar-nav'>
             <Nav className='ms-auto'>
               <Nav.Link href='/cart'>
                 <FaBeer /> Cart
               </Nav.Link>
               <Nav.Link href='/login'>
                 <FaUser /> Sign In
               </Nav.Link>
             </Nav>
           </Navbar.Collapse>
         </Container>
       </Navbar>
     </header>
   );
 };
 
 export default Header;