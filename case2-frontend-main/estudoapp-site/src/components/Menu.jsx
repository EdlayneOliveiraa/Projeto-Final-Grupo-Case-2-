import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'


function Menu() {

    return (
    <Navbar collapseOnSelect expand="lg" bg="" variant="dark" fixed="top" className='ttest'>
        <Container className='logo'>
            <LinkContainer to="/">
                <Navbar.Brand>
                <img
              img src="/img/Logo-Projeto-Final.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer className='espacoO' to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>

                    <LinkContainer className='espaco' to="/sobre">
                        <Nav.Link>Sobre</Nav.Link>
                     </LinkContainer>

                    <LinkContainer className='espaco' to="/funcionalidades">
                        <Nav.Link>Temas</Nav.Link>
                    </LinkContainer>

                    <LinkContainer className='espaco' to="/contato">
                        <Nav.Link>Contato</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default Menu;

