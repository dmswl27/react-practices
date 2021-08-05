import React from 'react';
import CardList from './CardList';
import cards from '../assets/json/data.json';    // ./data.json 내장 되어 있음

export default function KanbanBoard(){
    // // console.log(cards);                    ->                cards={cards.filter(card => card.status=='ToDo')
    // const cardList = {
    //     ToDo:[],
    //     Doing:[],
    //     Done:[]
    // }
    // cards.forEach(function (card) {
    //     cardList[card.status].push(card);
    // })
    return (
        <div className = {'KanbanBoard'}>
            <CardList key='ToDo' title={'ToDo'} cards={cards.filter(card => card.status=='ToDo')}/>
            <CardList key='Doing' title={'Doing'} cards={cards.filter(card => card.status=='Doing')}/>
            <CardList key='Done' title={'Done'} cards={cards.filter(card => card.status=='Done')}/>
        </div>
    );
}