import "./Result.css";
import {
  calculateInvestmentResults,
  INRFormatter,
} from "/src/util/investment.js";

const Result = ({ investmentInfo }) => {
  /*function to get result of investment using function calculateInvestmentResults from investment.js.
  annualData is of the formate 
  [
  {
      year:
      interest:
      valueEndOfYear:
      annualInvestment:
 ] */
  const annualData = calculateInvestmentResults(investmentInfo);

  return (
    <table id="result">
      <caption>Investment Result</caption>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((obj) => {
          return (
            <tr key={obj.year}>
              <td>{obj.year}</td>
              <td>{INRFormatter.format(obj.valueEndOfYear)}</td>
              <td>{INRFormatter.format(obj.interest)}</td>
              <td>{INRFormatter.format(obj.totalInterest)}</td>
              <td>{INRFormatter.format(obj.investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Result;
