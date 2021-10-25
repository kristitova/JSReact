import { useState } from 'react';
import * as styles from './SendMessage.module.css';

export const SendMessage = ({ message_ }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        message_({
            author: 'User',
            text: value
        });
        setValue('');
    }
    return (
        <form className={styles.formMess} onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={handleChange} />
            <input type='submit' />
        </form>

    )
}