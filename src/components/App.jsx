import React, { useState } from "react";

function App() {
  const time = new Date().toLocaleTimeString();

  const [count, setCount] = useState(time);

  function update() {
    const updated = new Date().toLocaleTimeString();
    setCount(updated);

    //setInterval(update, 10000);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
