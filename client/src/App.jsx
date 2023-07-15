import "./App.css";
import React, { useState } from "react";
import ClientForm from "./Components/ClientForm";
import { Wheel } from "react-custom-roulette";
function App() {
  const [mustStartSpinning, setMustStartSpinning] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    birth_date: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const returnedPrizeNumber = Math.floor(Math.random());
    setPrizeNumber(returnedPrizeNumber);
    setMustStartSpinning(true);
    setFormData({
      first_name: " ",
      last_name: "",
      birth_date: "",
    });
  };

  const data = [
    { option: "2" },
    { option: "3" },
    { option: "4" },
    { option: "5" },
    { option: "1" },
  ];

  return (
    <div className="container">
      <div className="roulette-container">
        <Wheel
          mustStartSpinning={mustStartSpinning}
          prizeNumber={prizeNumber}
          data={data}
        />
      </div>
      <ClientForm
        formData={formData}
        handleFormSubmit={handleFormSubmit}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
