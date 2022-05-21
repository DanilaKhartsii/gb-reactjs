import styles from "./msg.module.css";

export function Message({msg}) {
    return (
        <div className={styles.hello}>{msg}</div>
    )
}