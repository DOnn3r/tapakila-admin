import { Menu } from 'react-admin';
import { ShoppingBag } from '@mui/icons-material';

export const MyMenu = () => (
    <Menu>
        <Menu.ResourceItem name="users" />
        <Menu.ResourceItem name="events"/>
    </Menu>
);