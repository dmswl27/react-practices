import React from 'react';
import styles from './assets/scss/WriteForm.scss';

export default function WriteForm({onAddFormSubmit, onChangeMessageInput}){
    return (
        <form 
            className={styles.Guestbook__Form} 
            action=''
            method="post"
            onClick={onChangeMessageInput}
           

            >
            <input type="text" id="input-name" name="name" onChange = {(e) => {onAddFormSubmit(e)}} placeholder="이름" />
            <input type="password" id="input-password" name="password" onChange = {(e) => {onAddFormSubmit(e)}} placeholder="비밀번호" />
            <textarea id="tx-content" name="message" onChange = {(e) => {onAddFormSubmit(e)}} placeholder="내용을 입력해 주세요."></textarea>
            <input type="submit" value="보내기" />
        </form>
    );
}