// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)

//........START of helper function..................

//Calculate yearly interest.
function calculateYearlyInterest(currentValue, rate) {
  return currentValue * (rate / 100);
}

//Calculate invested capital.
function calculateInvestedCapital(initialInvestment, yearlyInvestment, year) {
  return initialInvestment + yearlyInvestment * year;
}

//Normalize inputs (defensive & pure)
function normalizeInvestmentInputs({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  return {
    initialInvestment: Number(initialInvestment),
    annualInvestment: Number(annualInvestment),
    expectedReturn: Number(expectedReturn),
    duration: Number(duration),
  };
}
//...........END of helper function...............

export function calculateInvestmentResults(investmentInfo) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    normalizeInvestmentInputs(investmentInfo);

  const annualData = [];

  let investmentValue = initialInvestment;
  let totalInterest = 0;

  for (let year = 1; year <= duration; year++) {
    const interest = calculateYearlyInterest(investmentValue, expectedReturn);

    totalInterest += interest;
    investmentValue += interest + annualInvestment;

    annualData.push({
      year: year,
      interest: interest,
      totalInterest: totalInterest,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      investedCapital: calculateInvestedCapital(
        initialInvestment,
        annualInvestment,
        year
      ),
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "₹1,000"
export const INRFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
