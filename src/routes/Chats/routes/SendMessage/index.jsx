import { useState, useRef, useEffect } from 'react';
import { Box, Button, TextField } from "@material-ui/core";

export const SendMessage = ({ messageUpdate }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const ref = useRef(null);

    useEffect(() => {
        ref.current?.focus();
    }, []);

    const handleSubmit = (event) => {
        messageUpdate({
            messid: Date.now(),
            author: 'User',
            text: value
        });
        setValue('');
        ref.current?.focus();
    }
    return (
        <Box component='form' >
            <TextField id="standard-basic" inputRef={ref} value={value} onChange={handleChange} />
            <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
        </Box>

    )
}