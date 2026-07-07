import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

import API from "../../services/api";
import { useAuth } from "../../context/AuthContext";

function Navigation() {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {

        try {

            await API.get("logout");

            logout();

            navigate("/");

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <Navbar bg="primary" variant="dark" expand="lg">

            <Container>

                <Navbar.Brand as={Link} to="/">
                    🚗 Dealership Review
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse>

                    <Nav className="me-auto">

                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>

                        <Nav.Link as={Link} to="/about">
                            About
                        </Nav.Link>

                        <Nav.Link as={Link} to="/contact">
                            Contact
                        </Nav.Link>

                    </Nav>

                    <Nav>

                        {user ? (

                            <>

                                <Navbar.Text className="me-3 text-white">
                                    Welcome {user}
                                </Navbar.Text>

                                <Button
                                    variant="outline-light"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>

                            </>

                        ) : (

                            <>

                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>

                                <Button
                                    as={Link}
                                    to="/register"
                                    variant="light"
                                    className="ms-2"
                                >
                                    Register
                                </Button>

                            </>

                        )}

                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>

    );
}

export default Navigation;