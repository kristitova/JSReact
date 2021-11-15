import { Box } from '@material-ui/core';

export const Layout = ({ children }) => {
    return (
        <Box>
            <Box sx={{ height: '400px' }} >{children}</Box>
        </Box>
    )
}