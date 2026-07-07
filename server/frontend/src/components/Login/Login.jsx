import { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import { useAuth } from "../../context/AuthContext";

function Login() {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post("login", credentials);

            if (response.data.status) {
                login(response.data.username);

                alert("Welcome " + response.data.username);

                navigate("/");

            } else {

                alert(response.data.message);

            }

        } catch (error) {

            console.error(error);

            alert("Login failed.");

        }

    };

    return (

        <Container className="mt-5">

            <Row className="justify-content-center">

                <Col md={6} lg={5}>

                    <Card className="shadow">

                        <Card.Header className="bg-success text-white text-center">
                            <h3>Login</h3>
                        </Card.Header>

                        <Card.Body>

                            <Form onSubmit={handleSubmit}>

                                <Form.Group className="mb-3">

                                    <Form.Label>Username</Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="username"
                                        value={credentials.username}
                                        onChange={handleChange}
                                        placeholder="Enter Username"
                                        required
                                    />

                                </Form.Group>

                                <Form.Group className="mb-4">

                                    <Form.Label>Password</Form.Label>

                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={credentials.password}
                                        onChange={handleChange}
                                        placeholder="Enter Password"
                                        required
                                    />

                                </Form.Group>

                                <div className="d-grid">

                                    <Button
                                        type="submit"
                                        variant="success"
                                    >
                                        Login
                                    </Button>

                                </div>

                            </Form>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>

        </Container>

    );
}

export default Login;