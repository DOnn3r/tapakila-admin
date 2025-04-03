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
import { authProvider } from "./provider/authProvider";
import { LoginPage } from "./screen/Login";

export const App = () => {
    return (
        <Admin authProvider={authProvider} loginPage={LoginPage} dashboard={Dashboard} layout={MyLayout} dataProvider={dataprovider} darkTheme={null} requireAuth>
            <CustomRoutes>
                <Route path="/dashboard" element={<Dashboard />} />
            </CustomRoutes>
            <Resource name='users' list={UserList} show={UserShow} />
            <Resource name='events' list={EventList} show={EventShow} edit={EventUpdate} create={CreateEvent} />
        </Admin>
    );
}
