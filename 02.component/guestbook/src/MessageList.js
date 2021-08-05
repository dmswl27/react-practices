import React from 'react';
import Message from './Message';
import styles from '../public/assets/scss/List.scss'

export default function MessageList({guestbook}){
    console.log(guestbook);
    return (
        <li className={styles.Guestbook__List}>
            {guestbook.map(guestbook => <Message 
                            key = {guestbook.no}
                            name = {guestbook.name}
                            message = {guestbook.message} />)}

        </li>
    );
}