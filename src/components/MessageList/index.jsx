import React, { useCallback } from 'react';
import * as styles from './MessageList.module.css';


export const MessageList = ({ messages }) => {
    const renderMessage = useCallback((mess) => (
        <div className={styles.messList}> {mess.author} : {mess.text}</div >
    ), []);

    return messages.map(renderMessage)
};