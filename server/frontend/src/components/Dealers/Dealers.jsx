import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Dealers() {
    const [dealers, setDealers] = useState([]);

    useEffect(() => {
        fetchDealers();
    }, []);

    const fetchDealers = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3030/fetchDealers"
            );

            setDealers(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">
                Car Dealerships
            </h2>

            <Row>
                {dealers.map((dealer) => (
                    <Col md={4} key={dealer.id} className="mb-4">

                        <Card className="shadow h-100">
                            <Card.Body>

                                <Card.Title>
                                    {dealer.full_name}
                                </Card.Title>

                                <Card.Text>
                                    <strong>City:</strong> {dealer.city}
                                </Card.Text>

                                <Card.Text>
                                    <strong>State:</strong> {dealer.state}
                                </Card.Text>

                                <Link
                                    to={`/dealer/${dealer.id}`}
                                    className="btn btn-primary"
                                >
                                    View Details
                                </Link>

                            </Card.Body>
                        </Card>

                    </Col>
                ))}
            </Row>

        </Container>
    );
}

export default Dealers;