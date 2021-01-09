import React from 'react';
import './list-items.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';
import Draggable from 'react-draggable';



function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <Draggable axis="y">
            <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
       
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteItem(item.key)
        }} icon="trash" />
        </span>
     </p>
     
    </div>
    </Draggable>
    })
    
    return <div>
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
    
    </div>;
  }

  export default ListItems;
  