import { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import API from "../../services/api";

function Register() {

    const [formData, setFormData] = useState({
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

const handleSubmit = async (e) => {
    e.preventDefault();

    try {

        const response = await API.post("register", formData);

        if (response.data.status) {

            alert(response.data.message);

            setFormData({
                username: "",
                first_name: "",
                last_name: "",
                email: "",
                password: ""
            });

        } else {

            alert(response.data.message);

        }

    } catch (error) {

        console.error(error);

        alert("Unable to register user.");

    }
};

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">

                <Col md={6} lg={5}>

                    <Card className="shadow">

                        <Card.Header className="bg-primary text-white text-center">
                            <h3>Create Account</h3>
                        </Card.Header>

                        <Card.Body>

                            <Form onSubmit={handleSubmit}>

                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="username"
                                        placeholder="Enter username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>First Name</Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="first_name"
                                        placeholder="Enter first name"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Last Name</Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="last_name"
                                        placeholder="Enter last name"
                                        value={formData.last_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>

                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Password</Form.Label>

                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Enter password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <div className="d-grid">
                                    <Button variant="primary" type="submit">
                                        Register
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

export default Register;