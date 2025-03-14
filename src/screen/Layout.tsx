import { Layout } from 'react-admin';
import { MyAppBar } from './AppBar';
import { MyMenu } from './Menu';

export const MyLayout = (props) => (
    <Layout {...props}menu={MyMenu} appBar={MyAppBar}/>
);