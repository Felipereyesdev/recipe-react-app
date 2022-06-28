import React from "react";
export default function ListHeader(){
    let content =(
        <tr>
          <th>Name</th>
            <th>cuisine</th>
            <th>photo</th>
            <th>ingredients</th>
            <th>preparation</th>
            <th>Actions</th>
        </tr>
      )
      return content;
}