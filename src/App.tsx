import { Admin, Resource } from "react-admin"
import { MyLayout } from "./components/Layout";

const User = () => {
    return <h1>Users</h1>
}

const Event = () => {
    return <h1>Events</h1>
}

export const App = () => <Admin layout={MyLayout}>
    <Resource name = 'users'/>
    <Resource name = 'events'/>
</Admin>;
