import React, { useState } from "react";
import Button from "./Button";
import Quotes from "./Quotes";
function Box() {
  let [dataa, setData] = useState("");
  let [random, setRandom] = useState(null);
  async function fetchFunction() {
    let res = await fetch("https://dummyjson.com/quotes");
    let data = await res.json();
    setData(data);
    setRandom(Math.floor(Math.random() * 30) + 1);
  }

  return (
    <div className={dataa ? "Box" : "Boxno"}>
      <Button runFunctionOnClick={fetchFunction} />
      <Quotes dataa={dataa} random={random} />
    </div>
  );
}

export default Box;
