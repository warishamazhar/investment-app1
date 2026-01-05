const ROIHistorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    investment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Investment",
      required: true,
    },

    roiAmount: {
      type: Number,
      required: true,
    },

    roiDate: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["credited", "pending"],
      default: "credited",
    },
  },
  { timestamps: true }
);

// Prevent duplicate daily ROI entries
ROIHistorySchema.index({ investment: 1, roiDate: 1 }, { unique: true });

module.exports = mongoose.model("ROIHistory", ROIHistorySchema);

