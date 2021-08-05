import React from 'react';
import guestbook from './data.json';
import WriteForm from './WriteForm';
import MessageList from './MessageList'; 
import styles from '../public/assets/scss/Guestbook.scss';

export default function Guestbook({title}){
    console.log(guestbook);
    return (
        <div className={styles.Guestbook} >
            <h1>{title}</h1>
            < WriteForm />
            < MessageList  guestbook = {guestbook}/>
           
        </div>
    );
}