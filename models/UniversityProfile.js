const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UniversityProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'universities'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  schools: {
    type: [String],
    required: true
  },
  course: [
    {
      degree: {
        type: String,
        required: true
      },
      stream: {
        type: String,
        required: true
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = UniversityProfile = mongoose.model('universityProfile', UniversityProfileSchema);
