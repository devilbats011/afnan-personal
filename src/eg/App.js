import React, { useState } from "react";
import { useEffect } from "react";
import "./css/App.scss";


function App() {

  const [data, setData] = useState([])

  useEffect(() => {

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
