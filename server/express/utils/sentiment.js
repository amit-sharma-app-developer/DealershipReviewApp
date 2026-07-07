function analyzeSentiment(text) {

    const review = text.toLowerCase();

    if (
        review.includes("great") ||
        review.includes("excellent") ||
        review.includes("amazing") ||
        review.includes("good")
    ) {
        return "positive";
    }

    if (
        review.includes("bad") ||
        review.includes("terrible") ||
        review.includes("worst")
    ) {
        return "negative";
    }

    return "neutral";
}

module.exports = analyzeSentiment;