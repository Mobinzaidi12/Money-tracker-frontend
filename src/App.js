import "./App.css";
import React, { useState, useEffect } from "react";
import { getData, postData, deleteData } from "./backend";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [itemName, setItemsName] = useState("");
  const [datetime, setDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState(0);


  useEffect(() => {
    getDataUse();
  }, []);

  const addData = async (e) => {
    e.preventDefault();
    const price = itemName.split(" ")[0];
    if (!itemName || !price || !datetime || !description) {
      setError(true);
      toast.error("Please provide complete information");
      return;
    }

    console.log(itemName, price, datetime, description);

    const isCreated = await postData(itemName, price, datetime, description);

    if (!isCreated) {
      setError(true);
      return;
    }

    setItemsName("");
    setDateTime("");
    setDescription("");
    toast.success("Created successfully");
    getDataUse();
  };

  const updateTotalAmount = (d) => {
    const total = d.reduce((pre, currentValue) => {
      return pre + currentValue.price
    }, 0
    );
    setAmount(total)
  }

  const getDataUse = async () => {
    const isShow = await getData();
    setData(isShow.data);
    updateTotalAmount(isShow.data);
  };


  const clearHandler = async () => {
    await deleteData();
    getDataUse();
  }


  return (
    <div className="App">
      <h1>
        {amount}<span>.00</span>
      </h1>
      <form>
        <div className="basic">
          <input
            type="text"
            placeholder="Enter Expense"
            value={itemName}
            onChange={(e) => setItemsName(e.target.value)}
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
        <div className="action-button">
          <button type="submit" onClick={addData}>
            Add Items
          </button>
          <button type="submit" onClick={clearHandler}>
            clear
          </button>
        </div>
      </form>
      <div>
        {error && (!itemName || !datetime || !description) && (
          <span className="input-validation">Please provide complete information</span>
        )}
      </div>
      {data.length > 0 &&
        data.map((item, index) => (
          <div key={index} className="transactions">
            <div className="transaction">
              <div className="left">
                <div className="name">{item.itemName}</div>
                <div className="description">{item.description}</div>
              </div>
              <div className="right">
                <div className={`price ${item.price < 0 ? "red" : "green"}`}>{item.price}</div>
                <div className="datetime">{item.datetime}</div>
              </div>
            </div>
          </div>
        ))}

      <ToastContainer />
    </div>
  );
}

export default App;
