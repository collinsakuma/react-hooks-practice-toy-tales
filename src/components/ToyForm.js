import React, { useState } from "react";

function ToyForm({ addNewToy }) {
  const [toyName, setToyName] = useState("");
  const [toyImage, setToyImage] = useState("");

  const submitNewToy = (e) => {
    e.preventDefault();
    const newToy = {
      name: toyName,
      image: toyImage,
      likes: 0,
    }
    addNewToy(newToy);
  }
   
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={submitNewToy}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyName}
          onChange={(e) => setToyName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyImage}
          onChange={(e) => setToyImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
