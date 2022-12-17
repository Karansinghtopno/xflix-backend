const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { videoService } = require("../services");

//To get all videos or a particular video(using title or content rating or genre or sort(release data or views))
const getVideos = catchAsync(async (req, res) => {
  const title = req.query.title ? req.query.title : "";
  const contentRating = req.query.contentRating
    ? req.query.contentRating
    : "All";
  const genres = req.query.genres ? req.query.genres : ["All"];
  const sortBy = req.query.sortBy ? req.query.sortBy : "releaseDate";

  console.log(title, contentRating, genres, sortBy);

  const videos = await videoService.getVideos(
    title,
    contentRating,
    genres,
    sortBy
  );
  res.status(httpStatus.OK).send({ videos: videos });
});
//When a requested with specific video id this controller function used to get particular video
const getVideo = catchAsync(async (req, res) => {
  // console.log(req.params.videoId);
  const videos = await videoService.getVideo(req.params.videoId);
  res.status(httpStatus.OK).send(videos);
});

//Used to a upload a video when a post request is made
const addVideo = catchAsync(async (req, res) => {
  const video = await videoService.addVideo(req.body);
  res.status(httpStatus.CREATED).send(video);
});

//This increases the views of a particular video
const changeViews = catchAsync(async (req, res) => {
  await videoService.changeViews(req.params.videoId);
  res.status(204).send();
});

//This changes the votes of a particular video either upvote or downvote as requested
const changeVotes = catchAsync(async (req, res) => {
  await videoService.changeVotes(
    req.params.videoId,
    req.body.vote,
    req.body.change
  );
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getVideos,
  getVideo,
  addVideo,
  changeViews,
  changeVotes,
};
