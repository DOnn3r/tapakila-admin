import { Admin, CustomRoutes, Resource } from "react-admin"
import { UserList } from "./screen/UserList";
import { EventList } from "./screen/EventList";
import { dataprovider } from "./data-provider";
import { Route } from "react-router";
import { EventShow } from "./screen/EventShow";
import { UserShow } from "./screen/UserShow";
import { EventUpdate } from "./screen/EventUpdate";
import { CreateEvent } from "./screen/CreateEvent";
import { Dashboard } from "./Components/Dashboard";
import { MyLayout } from "./Components/Layout";
import { Login } from "./screen/Login";

export const App = () => {
    return (
        <Admin authProvider={Login} dashboard={Dashboard} layout={MyLayout} dataProvider={dataprovider} darkTheme={null}>
            <CustomRoutes>
                <Route path="/" element={<Dashboard />} />
            </CustomRoutes>
            <Resource name='users' list={UserList} show={UserShow} />
            <Resource name='events' list={EventList} show={EventShow} edit={EventUpdate} create={CreateEvent} />
        </Admin>
    );
}
