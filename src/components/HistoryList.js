import React from 'react';

  export default function HistoryList (props) {

   
  return (
    <div >
        <li className="list-group-item"
        onClick = {props.onItemClickSreach} > 
        <span className="glyphicon glyphicon-trash"
        onClick = {props.onCloseItemClick} >
         </span>
         
        {props.oneList}  </li>
    </div>
  );}
