const express = require("express");
const router = express.Router();

const { getDB } = require("../database/connection");
const analyzeSentiment = require("../utils/sentiment");

/*
 * GET ALL DEALERS
 */
router.get("/fetchDealers", async (req, res) => {
    try {
        const db = getDB();

        const dealers = await db
            .collection("dealers")
            .find({})
            .toArray();

        res.json(dealers);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

/*
 * GET DEALER BY ID
 */
router.get("/fetchDealer/:id", async (req, res) => {
    try {
        const db = getDB();

        const dealer = await db
            .collection("dealers")
            .findOne({
                id: parseInt(req.params.id)
            });

        if (!dealer) {
            return res.status(404).json({
                message: "Dealer not found"
            });
        }

        res.json(dealer);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});
router.get("/fetchReviews/:dealerId", async (req, res) => {
    try {

        const db = getDB();

        const reviews = await db
            .collection("reviews")
            .find({
                dealerId: parseInt(req.params.dealerId)
            })
            .toArray();

        res.json(reviews);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
});
router.post("/addReview", async (req, res) => {
    try {

        const db = getDB();

        const review = req.body;

        review.sentiment = analyzeSentiment(
            review.review
        );

        const result = await db
            .collection("reviews")
            .insertOne(review);

        res.status(201).json({
            message: "Review added successfully",
            id: result.insertedId
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
});

module.exports = router;