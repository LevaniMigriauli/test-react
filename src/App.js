import logo from "./logo.svg";
import "./App.css";
// import { useState } from "react";
import Header from "./components/common/Header";
import Wrapper from "./components/common/Wrapper";
import MiddleSection from "./components/common/MiddleSection";

function App() {
  // const [color, setColor] = useState("red");
  // const [count, setCount] = useState(0);

  // function changeColor() {
  //   setColor("green");
  // }

  // function changeCount() {
  //   setCount(count + 1);
  // }
  const burgers = [
    {
      img: "../../public/images/238e287aa4d92d6e0cc4783e397b6e7386cd2e47-1333x1333.webp",
      burgerName: "Whoper Melt",
      calorage: "604 cal",
    },
    {
      img: "../../public/images/238e287aa4d92d6e0cc4783e397b6e7386cd2e47-1333x1333.webp",
      burgerName: "Whoper",
      calorage: "677 cal",
    },
    {
      img: "../../public/images/238e287aa4d92d6e0cc4783e397b6e7386cd2e47-1333x1333.webp",
      burgerName: "Double Whoper",
      calorage: "604 cal",
    },
  ];
  return (
    /* <>
       <div className="box" style={{ background: color }}></div>
      <button onClick={() => setColor("green")}>click</button>

      <h1>{count}</h1>
      <button onClick={changeCount}>countUp</button>
      <button onClick={() => setCount(count - 1)}>countUp</button>
      <Button number="1" />
      <Button number="2" />
      <Button number="3" />
      <Button number="4" />
      <Button number="5" /> 
    </>*/
    <Wrapper>
      <Header />
      <MiddleSection items={burgers} />
    </Wrapper>
  );
}

export default App;
