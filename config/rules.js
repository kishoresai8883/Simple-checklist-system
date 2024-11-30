const rules = [
    {
      id: "valuationFeePaid",
      description: "Valuation Fee Paid",
      evaluate: (data) => data.isValuationFeePaid === true,
    },
    {
      id: "ukResident",
      description: "UK Resident",
      evaluate: (data) => data.isUkResident === true,
    },
    {
      id: "riskRatingMedium",
      description: "Risk Rating Medium",
      evaluate: (data) => data.riskRating === "Medium",
    },
    {
      id: "ltvBelow60",
      description: "LTV Below 60%",
      evaluate: (data) =>
        (data.loanRequired / data.purchasePrice) * 100 < 60,
    },
  ];
  
  module.exports = rules;
  