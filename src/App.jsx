import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0);
  const [interestRate,SetInterestRate] = useState(6);
  const [downPayment,setDownPayment] = useState(0);
  const [tenure,setTenure] = useState(2);
  const [interest,setInterest] = useState(0);


  return (
    <div className="main">
      <span className="main-title title">EMI Calculator</span>

      <span className="title">Total Amount</span>
      <input
        type="number"
        value={amount}
        name="amount"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Total Amount of EMI"
      />

      <span className="title">Interest Rate</span>
      <input
        type="number"
        value={interestRate}
        name="amount"
        onChange={(e) => SetInterestRate(e.target.value)}
        placeholder="Total Amount of EMI"
      />

      <span className="title">Down Payment</span>
      <input
        type="number"
        value={downPayment}
        name="amount"
        onChange={(e) => setDownPayment(e.target.value)}
        placeholder="Total Amount of EMI"
      />
      <input
        type="range"
        min="0"
        max="100"
        onChange={(e) => setDownPayment(e.target.value)}
      />

      <span className="title">Tenure(Years)</span>
      <input
        type="number"
        value={tenure}
        name="amount"
        onChange={(e) => setTenure(e.target.value)}
        placeholder="Total Amount of EMI"
      />
      <input
        type="range"
        min="0"
        max="12"
        value={tenure}
        onChange={(e) => setTenure(e.target.value)}
      />
    </div>
  );
}

export default App
