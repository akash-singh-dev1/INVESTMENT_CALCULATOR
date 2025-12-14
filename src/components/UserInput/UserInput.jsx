import "./UserInput.css";

const UserInput = ({ investmentInfo, onChangeInvestment }) => {
  /*function to handle investmentInfo using two way binding.
  Generic handler for all inputs. */
  const handleInvestmentInfo = (event) => {
    const { id, value, min, max } = event.target;
    //only show result if the input value are valid under min max range.
    if (Number(value) < Number(min) || Number(value) > Number(max)) {
      window.alert(`the range of ${id} is not under preferd range`);
      return;
    }

    // in this function we are not change the string value to number because Number("")=0 ;
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
            min={0}
            max={1000000}
            value={investmentInfo.initialInvestment}
            onChange={handleInvestmentInfo}
          />
        </div>
        <div>
          <label htmlFor="annualInvestment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            id="annualInvestment"
            min={0}
            max={100000}
            value={investmentInfo.annualInvestment}
            onChange={handleInvestmentInfo}
          />
        </div>
        <div>
          <label htmlFor="expectedReturn">EXPECTED RETURN</label>
          <input
            type="number"
            id="expectedReturn"
            min={0}
            max={30}
            value={investmentInfo.expectedReturn}
            onChange={handleInvestmentInfo}
          />
        </div>
        <div>
          <label htmlFor="duration">DURATION</label>
          <input
            type="number"
            id="duration"
            min={0}
            max={80}
            value={investmentInfo.duration}
            onChange={handleInvestmentInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInput;
