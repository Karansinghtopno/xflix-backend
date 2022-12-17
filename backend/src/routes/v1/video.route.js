const express = require("express");
const validate = require("../../middlewares/validate");
const videoValidation = require("../../validations/video.validation");
const videoController = require("../../controllers/video.controller");

const router = express.Router();

router.get(
  "/",
  validate(videoValidation.searchVideos),
  videoController.getVideos
);
router.get(
  "/:videoId",
  validate(videoValidation.getVideo),
  videoController.getVideo
);
router.post("/", validate(videoValidation.addVideo), videoController.addVideo);
router.patch(
  "/:videoId/views",
  validate(videoValidation.updateViews),
  videoController.changeViews
);
router.patch(
  "/:videoId/votes",
  validate(videoValidation.updateVotes),
  videoController.changeVotes
);
module.exports = router;
