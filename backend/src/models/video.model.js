const mongoose = require("mongoose");

const Values = require("../utils/values");

const videoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    videoLink: { type: String, required: true, trim: true, unique: true },
    contentRating: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (!Values.contentRatings.includes(value)) {
          throw new Error("Invalid Content Rating");
        }
      },
    },
    genre: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (!Values.genres.includes(value)) {
          throw new Error("Invalid Genre");
        }
      },
    },
    releaseDate: {
      type: String,
      required: true,
      trim: true,
    },
    previewImage: {
      type: String,
      trim: true,
      default: "https://i.ytimg.com/vi_webp/hGrRg8aoBMU/sddefault.webp",
    },
    viewCount: {
      type: Number,
      default: 0,
    },
    votes: {
      upVotes: {
        type: Number,
        default: 0,
      },
      downVotes: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: false,
  }
);

const Video = mongoose.model("Video", videoSchema);

module.exports.Video = Video;
