import "../css/Main.css";
import Btn from "./Btn";
import Header from "../components/Header";
import Result from "../components/Result";

function Main(props) {
  return (
    <main className="main container">
      <Header />
      <Result input="4444444" />
      <section className="calculator-container container">
        <div className="fila">
          <Btn>7</Btn>
          <Btn>8</Btn>
          <Btn>9</Btn>
          <Btn>%</Btn>
        </div>
        <div className="fila">
          <Btn>4</Btn>
          <Btn>5</Btn>
          <Btn>6</Btn>
          <Btn>x</Btn>
        </div>
        <div className="fila">
          <Btn>1</Btn>
          <Btn>2</Btn>
          <Btn>3</Btn>
          <Btn>-</Btn>
        </div>
        <div className="fila">
          <Btn>AC</Btn>
          <Btn>0</Btn>
          <Btn>.</Btn>
          <Btn>+</Btn>
        </div>
        <div className="fila">
          <button className="equals-btn">=</button>
        </div>
        <div className="fila">
          <button className="clear-btn">Clear</button>
        </div>
      </section>
    </main>
  );
}

export default Main;
