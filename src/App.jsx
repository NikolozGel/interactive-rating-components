import { useState } from "react";
import Rate from "./components/Rate";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [rate, setRate] = useState(0);
  const [submit, setSubmit] = useState(false);
  return (
    <>
      {submit ? (
        <Result rate={rate} />
      ) : (
        <Rate rate={rate} setRate={setRate} setSubmit={setSubmit} />
      )}
    </>
  );
}

export default App;
