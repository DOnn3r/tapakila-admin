import { Admin, Resource } from "react-admin"
import { MyLayout } from "./screen/Layout";
import { UserList } from "./screen/UserList";
import { EventList } from "./screen/EventList";
import { dataprovider } from "./data-provider";

export const App = () => {
    return (
        <Admin layout={MyLayout} dataProvider={dataprovider}>
            <Resource name='users' list={UserList} />
            <Resource name='events' list={EventList} />
        </Admin>);
}
