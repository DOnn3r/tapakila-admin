import { AppBar, TitlePortal } from 'react-admin';
import { Typography } from '@mui/material';

export const MyAppBar = () => (
    <AppBar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tapakila
        </Typography>
        <TitlePortal />
    </AppBar>
);