import react from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    menu: {
        width: '100px'
    }
});

export const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.menu}>
                <Button to="/" component={Link} color='inherit'>Home</Button>
                <Button to='/profile' component={Link} color='inherit'>Profile</Button>
                <Button to="/chats" component={Link} color='inherit'>Chats</Button>
                <Button to="/gists" component={Link} color='inherit'>Gists</Button>
            </Toolbar >
        </AppBar >
    )
}

