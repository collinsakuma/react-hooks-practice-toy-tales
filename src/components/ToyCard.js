import React from "react";

function ToyCard({ toy, handleDonate, handleUpdatedToys }) {
  
  const handleLike = (toy) => {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({likes: toy.likes+1})
    })
    .then(res => res.json())
    .then(updatedToy => handleUpdatedToys(updatedToy))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={() => handleLike(toy)}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => handleDonate(toy.id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
