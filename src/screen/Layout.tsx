import { Layout } from 'react-admin';
import { MyAppBar } from './AppBar';
import { MyMenu } from './Menu';

export const MyLayout = (prop) => (
    <Layout {...prop} menu={MyMenu} appBar={MyAppBar}>
    </Layout>
);