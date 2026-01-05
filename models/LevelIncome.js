const ReferralIncomeSchema = new mongoose.Schema(
  {
    fromUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    toUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    investment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Investment",
    },

    level: {
      type: Number, 
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    type: {
      type: String,
      enum: ["investment", "roi"],
      default: "investment",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ReferralIncome", ReferralIncomeSchema);

