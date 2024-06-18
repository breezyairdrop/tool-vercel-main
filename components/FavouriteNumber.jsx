import React, { useState } from "react";

const FavNumber = () => {
  let savedNumber = localStorage.getItem("favNumber");

  const [favNumber, setFavNumber] = useState(savedNumber ?? "");

  const onFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("favNumber", favNumber);
  };

  return (
    <form onSubmit={onFormSubmit}> 
      <input
        type="number"
        value={favNumber}
        onChange={(e) => setFavNumber(e.target.value)}
      />
      <input type="submit" value="Save" />
      <div>Favorite Number: {favNumber}</div>
    </form>
  );
};

export default FavNumber;
