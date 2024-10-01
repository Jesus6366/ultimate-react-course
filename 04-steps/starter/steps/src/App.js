// @ts-check
import React from "react";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((step) => step + 1);
    }
  };

  // when updating the state base on previuos state, update it with a callback receiving the current state

  return (
    <>
      <Button bgColor={"#7950f2"} textColor={"#fff"} onClick={handlePrevious}>
        {/* Children props  */}
        <span> 👈</span>
        Previuos
        <div>Hello</div>
      </Button>

      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "fff" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3> Step{step} </h3>
      {children}
    </p>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}

export default App;
