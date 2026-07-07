import { Container, Row, Col, Card } from "react-bootstrap";

function Contact() {
    return (
        <Container className="mt-5">

            <h1 className="text-center mb-4">
                Contact Us
            </h1>

            <p className="text-center mb-5">
                We'd love to hear from you. Reach out to us using the information below.
            </p>

            <Row className="justify-content-center">

                <Col md={8}>

                    <Card className="shadow">

                        <Card.Body>

                            <h4 className="mb-4">
                                Dealership Review Application
                            </h4>

                            <p>
                                <strong>📍 Address:</strong><br />
                                123 Main Street<br />
                                New York, NY 10001<br />
                                United States
                            </p>

                            <hr />

                            <p>
                                <strong>📞 Phone</strong><br />
                                +1 (800) 555-1234
                            </p>

                            <hr />

                            <p>
                                <strong>📧 Email</strong><br />
                                support@dealerreviews.com
                            </p>

                            <hr />

                            <p>
                                <strong>🌐 Website</strong><br />
                                www.dealerreviews.com
                            </p>

                            <hr />

                            <p>
                                <strong>🕒 Business Hours</strong><br />
                                Monday - Friday<br />
                                9:00 AM – 6:00 PM
                            </p>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>

        </Container>
    );
}

export default Contact;