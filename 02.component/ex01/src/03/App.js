import React, { createElement } from 'react';
import FoodList from './FoodList';
 
export default function App(){       
    const foods = [{
        no: '1', 
        name : 'Bread', 
        quantity: 10
    },{
        no: '2', 
        name : 'Egg', 
        quantity: 10
    },{
        no: '3', 
        name : 'Milk', 
        quantity: 10
    },{
        no: '4', 
        name : '😢', 
        quantity: '🐱‍👓'
    }]
      
    return (
        <div id='App'>         
            <FoodList foods={foods}/>
        </div>
    )
       
}
 
// createElement(FoodList, {foods :foods});
// FoodList(props);
 
