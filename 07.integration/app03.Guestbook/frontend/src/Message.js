import React, { Fragment } from 'react';
import styles from './assets/scss/ListItem.scss';

export default function Message({name, message}){
    return (
        <div className={styles.Guestbook__List__Item}>
            <strong>{name}</strong>
            <p>{message && message.split('/n').map((line, index) => index > 0?<Fragment>{line}</Fragment> : line)}</p>
            <strong></strong>
            <a href=''>삭제</a>
        </div>
    );
}