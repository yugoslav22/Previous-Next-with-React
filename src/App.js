import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Counter /> */}
    </div>
  );
}

function Steps() {
  const [isOpen, setIsOpen] = useState(true);

  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previos
            </button>

            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// function Counter() {
//   const [step, setStep] = useState(1);
//   const [count, setCount] = useState(0);

//   const date = new Date("December 9 2023");
//   date.setDate(date.getDate() + count);

//   function lessStep() {
//     if (step > 1) setStep((s) => s - 1);
//   }
//   function moreStep() {
//     setStep((s) => s + 1);
//   }

//   function lessCount() {
//     setCount((c) => c - step);
//   }
//   function moreCount() {
//     setCount((c) => c + step);
//   }

//   return (
//     <div>
//       <div className="stepSide">
//         <button onClick={lessStep}>-</button>
//         <p>Step:{step}</p>
//         <button onClick={moreStep}>+</button>
//       </div>
//       <div className="countSide">
//         <button onClick={lessCount}>-</button>
//         <p>Count:{count}</p>
//         <button onClick={moreCount}>+</button>
//       </div>

//       <p>
//         <span>
//           {count === 0
//             ? "Today is "
//             : count > 0
//             ? `${count} days from today is`
//             : `${count} days ago was`}
//         </span>
//         <span> {date.toDateString()} </span>
//       </p>
//     </div>
//   );
// }
