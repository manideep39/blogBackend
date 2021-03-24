const mongoose = require("mongoose");
require("mongoose-type-url");
const { Schema } = mongoose;
const topics_enum = require("../utils/enums/TopicsEnum");

const PracticeQnsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    enum: [...Object.values(topics_enum)],
  },
  icon: {
    type: String,
    required: true,
  },
  questions: [
    {
      statement: {
        type: String,
        required: true,
        minLength: 4,
      },
      explanation: {
        type: String,
        required: true,
        minLength: 2,
      },
      type: {
        type: String,
        required: true,
        match: /LONG/,
      },
      verified: {
        type: Boolean,
        required: true,
        default: false,
      },
      source: {
        type: mongoose.SchemaTypes.Url,
        required: true,
      },
    },
  ],
});

const PracticeQns = mongoose.model("PracticeQns", PracticeQnsSchema);

module.exports = PracticeQns;
