import Header from "./components/Header/Header.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";
import Result from "./components/Result/Result.jsx";
import { useState } from "react";

function App() {
  /*state to store the input from user.
  HTML inputs work with strings, not numbers
  Even <input type="number"> gives you a string.*/
  const [investmentInfo, setInvestmentInfo] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  return (
    <>
      <Header />
      <UserInput
        investmentInfo={investmentInfo}
        onChangeInvestment={setInvestmentInfo}
      />
      <Result investmentInfo={investmentInfo} />
    </>
  );
}

export default App;
