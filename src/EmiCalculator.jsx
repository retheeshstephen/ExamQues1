// EmiCalculator.jsx

import React, { useState } from 'react';


const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEmi = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const periods = parseFloat(loanTenure) * 12; // Total number of payments

    const emiValue =
      (principal * rate * Math.pow(1 + rate, periods)) /
      (Math.pow(1 + rate, periods) - 1);
    setEmi(emiValue.toFixed(2));
  };

  const resetCalculator = () => {
    setLoanAmount('');
    setInterestRate('');
    setLoanTenure('');
    setEmi(null);
  };

  return (
    <div className="emi-calculator-container">
      <h1>EMI Calculator</h1>
      <div>
        <label>
          Loan Amount:
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Interest Rate (%):
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Loan Tenure (in years):
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
          />
        </label>
      </div>
      <div className='btn' >
        <button onClick={calculateEmi}>Calculate EMI</button>
        <button onClick={resetCalculator}>Reset</button>
      </div>
      {emi !== null && (
        <div>
          <h2>EMI: {emi}</h2>
        </div>
      )}
    </div>
  );
};

export default EmiCalculator;