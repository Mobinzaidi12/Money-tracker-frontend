import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDateTime] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="App">
      <h1>
        5000<span>.00</span>
      </h1>
      <form>
        <div className="basic">
          <input
            type="text"
            placeholder="Enter Expanse"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="datetime-local"
            value={datetime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </div>
        <div className="description">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Add Items</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">sumsung LCDs</div>
            <div className="description">It was time for new TV</div>
          </div>
          <div className="right">
            <div className="price red">-560</div>
            <div className="datetime">2023-2-1 15:46</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Iphone 13</div>
            <div className="description">It was time for new Phone</div>
          </div>
          <div className="right">
            <div className="price green">560</div>
            <div className="datetime">2023-2-1 15:46</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Hp Laptop</div>
            <div className="description">It was time for new Laptop</div>
          </div>
          <div className="right">
            <div className="price red">-560</div>
            <div className="datetime">2023-2-1 15:46</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
