import React, {useState, useEffect } from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList'; 
import styles from './assets/scss/Guestbook.scss';

export default function Guestbook({title}){
    const [guestbook, setGuestbooks] = useState([]);
    const [guestbookVo, setGuestbookVo] = useState([]);

    const onAddFormSubmit = function(e) {
        console.log(e.target.name, e.target.value);
        const {name, value} = e.target;
        setGuestbookVo({
            ...guestbookVo, // 기존의 guestbookVo 객체를 복사한 뒤
            [name]: value   // name 키를 가진 값을 value로 설정
        })
        console.log(guestbookVo);
    }

    const onChangeMessageInput = (e) => {
        e.preventDefault()
        try {
            const url = ''
        } catch (error) {
            
        }
    }

    useEffect(async () => {
        try {
            const response = await fetch('/api/messagelist', {
                method:'get',
                headers:{'Content-Type': 'application/json'}
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }

            setGuestbooks(json.data);    
        } catch(err){
            console.error(err);
        }
    }, []);

    const write = {
        add: async function (userNo, userName, userPassword, message) {
            try {
                console.log(userNo, userName, userPassword, message);
            } catch (error) {
                console.log(error);
            }
        }
    }


    return (
        <div className={styles.Guestbook} >
            <h1>{title}</h1>
            < WriteForm onAddFormSubmit = { onAddFormSubmit } onChangeMessageInput = { onChangeMessageInput } />
            < MessageList  
                guestbook = {guestbook}/>
           
        </div>
    );
}