import { DateInput, Edit, SimpleForm, TextInput } from "react-admin";

export const EventUpdate = () => (
    <Edit>
        <SimpleForm>
            <TextInput label='ID' source='id' />
            <TextInput source='name' />
            <DateInput source="date_of_event" />
            <TextInput source="categorie" />
            <DateInput source="location" />
        </SimpleForm>
    </Edit>
)