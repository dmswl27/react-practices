import React,{Component} from 'react';
import ListItem from './ListItem';

export default class FoodList extends Component{         
    render (){
        return (
            <ul>
                <ListItem name='Bread' quantity='20' />
                <ListItem name='egg' quantity='30'/>
                <ListItem name='Milk' quantity='40'/>
                <ListItem name='😜😜😜' quantity='🤞🤞🤞'/>
            </ul>
        )   
    };
}
 
 