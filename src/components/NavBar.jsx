import '../assets/css/NavBar.scss';
import Logo from '../assets/imgs/montyhacks.png';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <div>
            <Navbar
                fixed='top'
                bg='dark'
                expand='lg'
                variant='dark'
                className='navbar-bootstrap'
            >
                <Container>
                    <Navbar.Brand id='nav-logo' href='#home'>
                        <img
                            src={Logo}
                            width='40'
                            height='30'
                            className='d-inline-block align-top'
                            alt='React Bootstrap logo'
                        />
                        <span className='logo-text'>
                            {' MontyHacks'}
                            <span class='small-space'> </span>VI
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href='#about'>About</Nav.Link>
                            <Nav.Link href='#faq'>FAQ</Nav.Link>
                            <Nav.Link href='#schedule'>Schedule</Nav.Link>
                            <Nav.Link href='#sponsors'>Sponsors</Nav.Link>
                            <Nav.Link href='https://docs.google.com/forms/d/e/1FAIpQLScDXKF_POjXzfnouDdtcSrlOkP7A5maY9Nl1B5x0NpRY6DU7g/viewform?usp=sf_link'>
                                Sign Up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
