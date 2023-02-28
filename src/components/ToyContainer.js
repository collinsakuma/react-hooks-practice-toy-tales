import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyData, handleDonate, handleUpdatedToys }) {
  const renderToys = toyData.map(toy => (
    <ToyCard key= {toy.id} toy={toy} handleDonate={handleDonate} handleUpdatedToys={handleUpdatedToys}/>
  ))
  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
