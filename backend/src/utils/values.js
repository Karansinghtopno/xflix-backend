//These are all the values used in our video objects and these values are now used for our model schema validation
const contentRatings = ["Anyone", "7+", "12+", "16+", "18+"];
const genres = ["Education", "Sports", "Movies", "Comedy", "Lifestyle"];
const sortBy = ["viewCount", "releaseDate"];
const updateVoteTypes = ["upVote", "downVote"];
const changeVoteTypes = ["increase", "decrease"];

module.exports = {
  contentRatings,
  genres,
  sortBy,
  updateVoteTypes,
  changeVoteTypes,
};
