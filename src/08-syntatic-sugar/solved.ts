function getFirstFiveRatings(ratings) {
    const MINIMUM_REQUIRED_RATINGS = 5;

    const latestRatings = ratings.slice(0, MINIMUM_REQUIRED_RATINGS);
    const hasEnoughRatings = ratings.length >= MINIMUM_REQUIRED_RATINGS;

    return latestRatings && hasEnoughRatings;
}
  
function sumFirstFiveRatings(ratings) {
    const haveRatings = Boolean(ratings);

    if (haveRatings) {
        const firstFiveRatings = getFirstFiveRatings(ratings)

        if (!firstFiveRatings) return { error: 'there must be at least 5 ratings' }

        let ratingsSum = 0;

        for (const rating of firstFiveRatings) {
            ratingsSum += Number(rating)
        }

        const currentDateInMilliseconds = Number(new Date());

        return { ratingsSum, created_at: currentDateInMilliseconds }
    }

    return { error: 'ratings is required' }
}
  
const appRatings = ['5', '3', '4', '4', '5', '1', '5', '4', '4', '3'];

sumFirstFiveRatings(appRatings);