import react, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getError, getLoading, getTodos } from './../../Redux/store/Gists_/selectors';
import { getTodosWithThunk } from '../../Redux/store/Gists_/action';
import { Box, Button, CircularProgress, ListItem, List, ListItemText } from '@material-ui/core';

export const Gists = () => {

    const dispatch = useDispatch();
    const isError = useSelector(getError);
    const isLoading = useSelector(getLoading);
    const isTodos = useSelector(getTodos);

    const getData = () => {
        dispatch(getTodosWithThunk)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <Box>
            <Button onClick={getData}>Recall effect</Button>

            {
                isLoading &&
                <CircularProgress />
            }

            {
                isError &&
                <Button onClick={getData}>Reload</Button>

            }
            {
                !isLoading && isTodos.length > 0 &&
                <List>


                    {isTodos.map(({ id, title }) => (
                        <ListItem key={id}>
                            <ListItemText>
                                {title}
                            </ListItemText>
                        </ListItem >)
                    )}

                </List>


            }
        </Box>

    )

}

