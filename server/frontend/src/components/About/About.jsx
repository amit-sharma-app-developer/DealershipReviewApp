import { Container, Row, Col, Card } from "react-bootstrap";

import team1 from "../../assets/images/team1.jpg";
import team2 from "../../assets/images/team2.jpg";
import team3 from "../../assets/images/team3.jpg";
import team4 from "../../assets/images/team4.jpg";

const members = [
    {
        name: "John Smith",
        role: "Project Manager",
        email: "john@dealerreviews.com",
        image: team1
    },
    {
        name: "Emma Johnson",
        role: "Frontend Developer",
        email: "emma@dealerreviews.com",
        image: team2
    },
    {
        name: "Michael Brown",
        role: "Backend Developer",
        email: "michael@dealerreviews.com",
        image: team3
    },
    {
        name: "Sophia Wilson",
        role: "UI/UX Designer",
        email: "sophia@dealerreviews.com",
        image: team4
    }
];

function About() {
    return (
        <Container className="mt-5">

            <h1 className="text-center mb-4">
                About Us
            </h1>

            <p className="text-center mb-5">
                Dealership Review Application helps customers discover trusted
                automobile dealerships by providing authentic reviews and ratings.
            </p>

            <Row>

                {members.map((member, index) => (

                    <Col md={6} lg={3} key={index} className="mb-4">

                        <Card className="shadow h-100">

                            <Card.Img
                                variant="top"
                                src={member.image}
                            />

                            <Card.Body>

                                <Card.Title>
                                    {member.name}
                                </Card.Title>

                                <Card.Text>
                                    <strong>{member.role}</strong>
                                </Card.Text>

                                <Card.Text>
                                    {member.email}
                                </Card.Text>

                            </Card.Body>

                        </Card>

                    </Col>

                ))}

            </Row>

        </Container>
    );
}

export default About;