import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyData, setToyData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(res => res.json())
      .then(data => setToyData(data))
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const addNewToy = (newToyData) => {
      fetch("http://localhost:3001/toys", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json"
        },
        body: JSON.stringify(newToyData)
      })
      .then(res => res.json())
      .then(data => setToyData([...toyData, data]))
  }

  const handleDonate = (id) => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => setToyData(toyData.filter(toy => toy.id !== id)))
  }

  const handleUpdatedToys = (updatedToy) => {
    const updatedToys = toyData.map((toy) => {
      if(toy.id === updatedToy.id) {
        return updatedToy;
      } else {
        return toy;
      }
    });
    setToyData(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyData={toyData} handleDonate={handleDonate} handleUpdatedToys={handleUpdatedToys}/>
    </>
  );
}

export default App;
