import styles from "./msgList.module.css";
import {useEffect, useRef, useState} from "react";
import {Message} from "./message";

export const MessageList = () => {
    const [text, setText] = useState()
    const [messagesList, setMsg] = useState([]);
    const msgBot = {author: 'Bot', text: 'Hello from bot'};
    const ref = useRef();

    useEffect(() => {
        ref.current?.focus();
    }, [])

    useEffect(() => {
        let timerId = null;

        if (messagesList.length && messagesList[messagesList.length - 1].author === 'User') {
            timerId = setTimeout(() => setMsg([...messagesList, msgBot]), 1500);
        }

        return () => {
            clearInterval(timerId)
        }
    }, [messagesList])

    const createMsg = () => {
        if (text) {
            setMsg([...messagesList, {author: 'User', text: text}]);
            setText("")
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.chatWrapper}>
                <div className={styles.msgsArea}>
                    {messagesList.map((msg) => (
                        <Message message={msg} />
                    ))}
                </div>
                <div className={styles.actionArea}>
                    <input placeholder="enter text..."
                           value={text}
                           onChange={e => setText(e.target.value)}
                           className={styles.inputMsg} type="text"
                           ref={ref}
                    />
                    <button className={styles.sendMsgBtn} onClick={createMsg}>Send msg</button>
                </div>
            </div>
        </div>
    )
}