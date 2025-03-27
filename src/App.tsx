import { Admin, CustomRoutes, Resource } from "react-admin"
import { MyLayout } from "./screen/Layout";
import { UserList } from "./screen/UserList";
import { EventList } from "./screen/EventList";
import { dataprovider } from "./data-provider";
import { Route } from "react-router";
import { Dashboard } from "./screen/Dashboard";
import { EventShow } from "./screen/EventShow";
import { UserShow } from "./screen/UserShow";
import { EventUpdate } from "./screen/EventUpdate";
import { UserUpdate } from "./screen/UserUpdate";

export const App = () => {
    return (
        <Admin dashboard={Dashboard} layout={MyLayout} dataProvider={dataprovider} darkTheme={null} >
            <CustomRoutes>
                <Route path="/" element={<Dashboard />} />
            </CustomRoutes>
            <Resource name='users' list={UserList} show={UserShow} edit={UserUpdate}/>
            <Resource name='events' list={EventList} show={EventShow} edit={EventUpdate}/>
        </Admin>
    );
}
