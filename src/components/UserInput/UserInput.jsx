import "./UserInput.css";

const UserInput = ({ investmentInfo, onChangeInvestment }) => {
  /*function to handle investmentInfo using two way binding.
  Generic handler for all inputs. */
  const handleInvestmentInfo = (event) => {
    const { id, value } = event.target;

    onChangeInvestment((prevInfo) => ({
      ...prevInfo,
      [id]: value, // dynamic key update
    }));
  };

  return (
    <div id="user-input-container">
      <div className="input-group">
        <div>
          <label htmlFor="initialInvestment">INITIAL INVESTMENT</label>
          <input
            type="number"
            id="initialInvestment"
            min={1}
            value={investmentInfo.initialInvestment}
            onChange={handleInvestmentInfo}
          />
        </div>
        <div>
          <label htmlFor="annualInvestment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            id="annualInvestment"
            min={1}
            value={investmentInfo.annualInvestment}
            onChange={handleInvestmentInfo}
          />
        </div>
        <div>
          <label htmlFor="expectedReturn">EXPECTED RETURN</label>
          <input
            type="number"
            id="expectedReturn"
            min={1}
            value={investmentInfo.expectedReturn}
            onChange={handleInvestmentInfo}
          />
        </div>
        <div>
          <label htmlFor="duration">DURATION</label>
          <input
            type="number"
            id="duration"
            min={1}
            value={investmentInfo.duration}
            onChange={handleInvestmentInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInput;
