import React, { useState } from "react";
import { useEffect } from "react";
import "./css/App.scss";
// eslint-disable-next-line no-unused-vars
// import * as sandbox from "./eg/sandbox";

function App() {
  //useState mount data
  //useState loaded first before useEffect and jsx
  const [data, setData] = useState([])

  useEffect(() => {
    //init data
    //useEffect Execute after jsx loaded
    setData([1, 2, 3])

  }, [])
  return (
    <div className="App App-header">
      <header>salam</header>
      <main>
        {data.map((ix, i) => {
          return (
            <p key={i}>
              {i} : {ix}
            </p>
          );
        })}
      </main>
      <footer>Wslm</footer>
    </div>
  );
}

export default App;
