import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function AddReview() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        review: "",
        purchase: false,
        purchase_date: "",
        car_make: "",
        car_model: "",
        car_year: ""
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await axios.post(
                "http://localhost:3030/addReview",
                {
                    dealerId: parseInt(id),
                    sentiment: "positive",
                    ...formData
                }
            );

            alert("Review Added Successfully");

            navigate(`/dealer/${id}`);

        } catch (error) {

            console.error(error);
            alert("Failed to add review");

        }
    };

    return (
        <div className="container mt-4">

            <h2>Add Review</h2>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Review
                    </label>
                    <textarea
                        name="review"
                        className="form-control"
                        rows="4"
                        value={formData.review}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        name="purchase"
                        className="form-check-input"
                        checked={formData.purchase}
                        onChange={handleChange}
                    />

                    <label className="form-check-label">
                        Purchased Vehicle
                    </label>
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Purchase Date
                    </label>
                    <input
                        type="date"
                        name="purchase_date"
                        className="form-control"
                        value={formData.purchase_date}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Car Make
                    </label>
                    <input
                        type="text"
                        name="car_make"
                        className="form-control"
                        value={formData.car_make}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Car Model
                    </label>
                    <input
                        type="text"
                        name="car_model"
                        className="form-control"
                        value={formData.car_model}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Car Year
                    </label>
                    <input
                        type="number"
                        name="car_year"
                        className="form-control"
                        value={formData.car_year}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-success"
                >
                    Submit Review
                </button>

            </form>

        </div>
    );
}

export default AddReview;