import "./UserInput.css";

const UserInput = () => {
  return (
    <div id="user-input-container">
      <div className="input-group">
        <div>
          <label forHtml="INITIAL INVESTMENT">INITIAL INVESTMENT</label>
          <input type="number" id="INITIAL INVESTMENT" min={1} />
        </div>
        <div>
          <label forHtml="ANNUAL INVESTMENT">ANNUAL INVESTMENT</label>
          <input type="number" id="ANNUAL INVESTMENT" min={1} />
        </div>
        <div>
          <label forHtml="EXPECTED RETURN">EXPECTED RETURN</label>
          <input type="number" id="EXPECTED RETURN" min={1} />
        </div>
        <div>
          <label forHtml="DURATION">DURATION</label>
          <input type="number" id="DURATION" min={1} />
        </div>
      </div>
    </div>
  );
};

export default UserInput;
