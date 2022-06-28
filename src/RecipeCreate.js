import React, { useState } from "react";

function RecipeCreate({createRecipies}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const formData = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation: "",

  }
  const [newRecipie, setNewRecipie] = useState(formData);
  const {name,cuisine,photo,ingredients,preparation} = newRecipie;
  function handleContentChange(event) {
    const {target} = event;
    const value = target.value;
    setNewRecipie({...newRecipie, [target.name]: value})

  }
  function handleSubmit(event) {
    event.preventDefault();
    createRecipies(newRecipie);
    setNewRecipie(formData);
   
  }

  
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor = "name">
              <input 
            name="name"
            placeholder="name"
            type = "text"
            id = "name"
            onChange = {handleContentChange}
            value = {name}
            required/>
            </label>
            </td>
            <td>
              <label htmlFor = "cuisine">
              <input 
              name="cuisine"
              placeholder="cuisine"
              type ="text"
              id = "cuisine"
              onChange = {handleContentChange}
              value = {cuisine}
              required
              />
              </label>
              </td>
            <td>
              <label html = "photo">
              <input 
              name="photo"
              placeholder="photo"
              type = "url"
              id = "photo"
              onChange = {handleContentChange}
              value = {photo}
              required
              />
              </label>
              </td>
            <td >
              <label htmlFor="ingredients"><textarea 
            name="ingredients"
            placeholder="ingredients"
            type = "textarea"
            id = "ingredients"
            onChange = {handleContentChange}
            value = {ingredients}
            required
            /></label></td>
            <td>
              <label htmlFor="preparation">
              <textarea 
            name="preparation"
            placeholder="preparation"
             type = "textarea"
             id = "preparation"
             onChange = {handleContentChange}
             value = {preparation}
             required/></label></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
