import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function DealerDetails() {

    const { id } = useParams();

    const [dealer, setDealer] = useState(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchDealer();
        fetchReviews();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchDealer = async () => {
        try {

            const response = await axios.get(
                `http://localhost:3030/fetchDealer/${id}`
            );

            setDealer(response.data);

        } catch (error) {
            console.error(error);
        }
    };
    const fetchReviews = async () => {

        try {

            const response = await axios.get(
                `http://localhost:3030/fetchReviews/${id}`
            );

            setReviews(response.data);

        } catch (error) {

            console.error(error);

        }
    };

    if (!dealer) {
        return (
            <div className="container mt-5">
                <h3>Loading...</h3>
            </div>
        );
    }

    return (
        <div className="container mt-4">

            <h2>{dealer.full_name}</h2>

            <Link
                to={`/dealer/${id}/add-review`}
                className="btn btn-success mb-3"
            >
                Add Review
            </Link>

            <hr />

            <p>
                <strong>City:</strong> {dealer.city}
            </p>

            <p>
                <strong>State:</strong> {dealer.state}
            </p>

            <p>
                <strong>Address:</strong> {dealer.address}
            </p>

            <p>
                <strong>ZIP:</strong> {dealer.zip}
            </p>

            <hr />

            <h3>Customer Reviews</h3>

            {reviews.length === 0 ? (

                <div className="alert alert-info">
                    No reviews available.
                </div>

            ) : (

                reviews.map((review, index) => (

                    <div
                        key={index}
                        className="card mb-3"
                    >
                        <div className="card-body">

                            <div className="d-flex justify-content-between">

                                <h5>{review.name}</h5>

                                <span
                                    className={
                                        review.sentiment === "positive"
                                            ? "badge bg-success"
                                            : review.sentiment === "negative"
                                                ? "badge bg-danger"
                                                : "badge bg-warning"
                                    }
                                >
                                    {review.sentiment}
                                </span>

                            </div>

                            <p>
                                {review.review}
                            </p>

                            {review.purchase && (

                                <div>
                                    Purchased:
                                    {" "}
                                    {review.car_year}
                                    {" "}
                                    {review.car_make}
                                    {" "}
                                    {review.car_model}
                                </div>

                            )}

                        </div>
                    </div>

                ))

            )}

        </div>
    );
}

export default DealerDetails;