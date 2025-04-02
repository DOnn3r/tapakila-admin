import { AppBar, TitlePortal } from 'react-admin';
import { Avatar, Typography } from '@mui/material';

export const MyAppBar = () => (
    <AppBar sx={{ backgroundColor: '#0039a6', color: '#EEEEFF' }}>
        <Typography variant="h4" component="a" sx={{ flexGrow: 1, color: '#4FFFB0', display: 'flex', direction: 'row', alignItems: "center", justifyContent: "flex-start" }}>
            <Avatar
                src="../../public/E_tapakila.svg"
                alt='Logo'
                sx={{
                    width: 50,
                    height: 30
                }}
            />Tapakila
        </Typography>
        <TitlePortal />
    </AppBar>
);