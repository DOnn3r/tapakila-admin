import { Menu } from 'react-admin';
import { Dashboard, Event, Person, } from '@mui/icons-material';

export const MyMenu = () => (
    <Menu sx={{
        backgroundColor: '#13274F', color: 'white !important', height: '100vh', display: 'flex', flexDirection: 'column'
    }}>
        <Menu.Item to="/" primaryText="Dashboard" leftIcon={<Dashboard sx={{ color: '#EEEEFF' }} />} sx={{
            color: '#EEEEFF !important',
            '&:hover': {
                color: '#0039a6 !important',
                backgroundColor: '#0a1128',
                '& .MuiSvgIcon-root': {
                    color: '#0039a6',
                },
            },
        }} />
        <Menu.Item to='/users' primaryText="Users" leftIcon={<Person sx={{ color: '#EEEEFF' }} />} sx={{
            color: '#EEEEFF !important', '&:hover': {
                color: '#0039a6 !important',
                backgroundColor: '#0a1128',
                '& .MuiSvgIcon-root': {
                    color: '#0039a6',
                },
            },
        }} />
        <Menu.Item to='/events' primaryText="Events" leftIcon={<Event sx={{ color: '#EEEEFF' }} />} sx={{
            color: '#EEEEFF !important', '&:hover': {
                color: '#0039a6 !important',
                backgroundColor: '#0a1128',
                '& .MuiSvgIcon-root': {
                    color: '#0039a6',
                },
            },
        }} />
    </Menu >
);