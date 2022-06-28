import React from "react";
import ListHeader from "./ListHeader";

function RecipeList({recipes, deleteRecipie}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  const rows = recipes.map(({ name, cuisine, photo,  ingredients, preparation },index) => (
    <tr key={index}>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td><img src = {photo} alt = "food photo"/></td>
      <td className="content_td"><p>{ingredients}</p></td>
      <td className="content_td"><p>{preparation}</p></td>
      <td><button name="delete" onClick = {() => deleteRecipie(index)}>Delete</button></td>
    </tr>
  ));

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <ListHeader/>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
