import styles from "../msgList.module.css";

export const Message = ({message}) => {
    return (
        <div className={styles.user}>
            <div className={styles.author}>{message.author}</div>
            <div className={styles.text}><span>{message.text}</span></div>
        </div>
    )
}