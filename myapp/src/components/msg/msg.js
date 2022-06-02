import styles from "./msg.module.css";
import {useEffect, useState} from "react";

export function Message() {
    const [text, msgText] = useState()
    const [messagesList, addMsg] = useState([]);
    let count = 0;

    useEffect(() => {
        if(messagesList.length && messagesList[messagesList.length-1].author === 'User') {
            const msgBot = {author: 'Bot', text: 'Hello from bot'};
            setTimeout(() => addMsg([...messagesList, msgBot]), 1500);
        }
    }, [messagesList])

    function userMsg(event) {
        msgText(event.target.value);
    }

    function createMsg() {
        const newMsg = {author: 'User', text: text};
        addMsg([...messagesList, newMsg]);
    }

    return (
        <div className={styles.container}>
            <div className={styles.chatWrapper}>
                <div className={styles.msgsArea}>
                    {messagesList.map((msg) => (
                        <div className={styles.user} key={`index-${count++}`}>
                            <div className={styles.author}>{msg.author}</div>
                            <div className={styles.text}><span>{msg.text}</span></div>
                        </div>
                    ))}
                </div>
                <div className={styles.actionArea}>
                    <input onChange={userMsg} className={styles.inputMsg} type="text"/>
                    <button className={styles.sendMsgBtn} onClick={createMsg}>Send msg</button>
                </div>
            </div>
        </div>
    )
}