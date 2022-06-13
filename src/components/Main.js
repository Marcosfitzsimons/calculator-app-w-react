import "../css/Main.css";
import React from "react";
import Btn from "./Btn";
import Header from "../components/Header";
import Result from "../components/Result";
import { useState } from "react";
import { evaluate } from "mathjs";

function Main(props) {
  const [input, setInput] = useState("");

  const addInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los calculos.")
    }
  };

  const errorMsg = () => {
    if (input.slice(-1) === "/" || input.slice(-1) === "*" || input.slice(-1) === "." || input.slice(-1) === "-" || input.slice(-1) === "+") {
      alert("Operacion no valida");
      return false;
    }
  }

  return (
    <main className="main container">
      <Header />
      <Result input={input} />
      <section className="calculator-container container">
        <div className="fila">
          <Btn handleClick={addInput}>7</Btn>
          <Btn handleClick={addInput}>8</Btn>
          <Btn handleClick={addInput}>9</Btn>
          <Btn handleClick={addInput}>/</Btn>
        </div>
        <div className="fila">
          <Btn handleClick={addInput}>4</Btn>
          <Btn handleClick={addInput}>5</Btn>
          <Btn handleClick={addInput}>6</Btn>
          <Btn handleClick={addInput}>*</Btn>
        </div>
        <div className="fila">
          <Btn handleClick={addInput}>1</Btn>
          <Btn handleClick={addInput}>2</Btn>
          <Btn handleClick={addInput}>3</Btn>
          <Btn handleClick={addInput}>-</Btn>
        </div>
        <div className="fila">
          <button
            className="btn-container btn-container--mod"
            onClick={() => setInput("")}
          >
            AC
          </button>
          <Btn handleClick={addInput}>0</Btn>
          <Btn handleClick={addInput}>.</Btn>
          <Btn handleClick={addInput}>+</Btn>
        </div>
        <div className="fila">
          <Btn className="equals-btn" handleClick={calculateResult} onClick={errorMsg}>
            =
          </Btn>
        </div>
        <div className="fila">
          <button className="clear-btn" onClick={() => setInput("")}>
            Clear
          </button>
        </div>
      </section>
    </main>
  );
}

export default Main;
