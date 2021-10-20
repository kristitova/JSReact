import React from "react";
import * as styles from './Message.module.css'

export const Message = (props) => {
    return (
        <p className={styles.messageText}>{props.text}</p>
    );
}