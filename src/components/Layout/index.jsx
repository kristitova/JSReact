import { Box } from '@material-ui/core';

export const Layout = ({ children }) => {
    return (
        <Box>
            <Box sx={{ height: '2000px' }} >{children}</Box>
        </Box>
    )
}