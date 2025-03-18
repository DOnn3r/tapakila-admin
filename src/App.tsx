import { Admin, CustomRoutes, Resource } from "react-admin"
import { MyLayout } from "./screen/Layout";
import { UserList } from "./screen/UserList";
import { EventList } from "./screen/EventList";
import { dataprovider } from "./data-provider";
import { Route } from "react-router";
import { Dashboard } from "./screen/Dashboard";

export const App = () => {
    return (
        <Admin dashboard={Dashboard} layout={MyLayout} dataProvider={dataprovider} >
            <CustomRoutes>
                <Route path="/" element={<Dashboard />} />
            </CustomRoutes>
            <Resource name='users' list={UserList} />
            <Resource name='events' list={EventList} />
        </Admin>
    );
}
