import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [msg, setMsg] = useState("");

  const calculationBmi = (e) => {
    e.preventDefault(); //weight and height k numbe re convert kora holo karon na hole string hid=sebe dhore nitese so alert dibena
    const weightValue = Number(weight);
    const heightValue = Number(height);
    if (weightValue === 0 || heightValue === 0) {
      alert("please Enter a valid weight & height");
    } else {
      let BMI = ((703 * weightValue) / (heightValue * heightValue)).toFixed(2);
      setBmi(BMI);
      if (bmi < 18.5) {
        setMsg("You are underweight");
      } else if (bmi > 18.5 && bmi < 24.9) {
        setMsg("you in are normal weight");
      } else if (bmi > 25 && bmi < 29.9) {
        setMsg("you in are over weight");
      } else {
        setMsg("you are obese");
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="bg-gray-600 p-20">
      <div
      className=" bg-gray-200 rounded-md  backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex flex-col   max-w-[700px] mx-auto p-20
"
    >
      <div className="text-4xl font-bold italic text-white text-center">Bmi Calculator</div>
      <div>
        <form onSubmit={calculationBmi}>
          <div className=" py-5 flex flex-col text-white ">
            <label className="font-semibold text-xl  ">Weight (ibs)</label>
            <input
              type="text"
              className="mt-4 p-2 rounded-lg border-black border-2 w-full"
              value={weight}
              placeholder="Enter Weight in ibs"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className=" py-5 flex-col flex text-white">
            <label className="font-semibold text-xl  ">height (in)</label>
            <input
              type="text"
              className="mt-4 p-2 rounded-lg border-black border-2"
              value={height}
              placeholder="Enter Height in ibs"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="flex flex-col ">
            <button className="btn btn-primary my-5" type="submit">
              Submit
            </button>
            <button type="submit" className="btn btn-outline text-white" onClick={reload}>
              Reload
            </button>
          </div>
          <div className="mt-10 text-white">
            <h1 className="text-xl font-semibold">Your BMI is {bmi}</h1>
            <p className="text-xl font-bold">{msg}</p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default App;
