import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar>
        <Container fluid className='header_container'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">TMDB</Nav.Link>

                    <NavDropdown title="Movies" id="basic-nav-dropdown">
                        <NavDropdown.Item as='div'>
                            <NavLink to='popular-movies'>Popular</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item as='div'>
                            <NavLink to='now-in-cinema-movies'>In cinema</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item as='div'>
                            <NavLink to='waited-movies'>Waited</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item as='div'>
                            <NavLink to='top-rated-movies'>Top Rated</NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="TV Shows" id="basic-nav-dropdown">
                        <NavDropdown.Item as='div'>
                            <NavLink to='popular-tv'>Popular</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item as='div'>
                            <NavLink to='today-live-tv'>Live today</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item as='div'>
                            <NavLink to='now-live-tv'>Live now</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item as='div'>
                            <NavLink to='top-rated-tv'>Top Rated</NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="People" id="basic-nav-dropdown">
                        <NavDropdown.Item as='div'>
                            <NavLink>Popular</NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="More" id="basic-nav-dropdown">
                        <NavDropdown.Item as='div'>
                            <NavLink>Discussions</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item as='div'>
                            <NavLink>Leaders table</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item as='div'>
                            <NavLink>Support</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item as='div'>
                            <NavLink>API</NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>

                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    )
};

export default Navigation;