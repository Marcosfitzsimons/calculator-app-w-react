import "../css/Result.css";
import React from "react";

// Otra forma de escribir componentes funcionales:
// Con funcion flecha.
const Result = ({ input }) => (
  <section className="calculator-result">{input}</section>
);

export default Result;
