import { ArrowBack } from "@mui/icons-material";
import { Create, SimpleForm, TextInput, DateInput, Button, TopToolbar, NumberInput, ImageField, ImageInput } from "react-admin"
import { useNavigate } from "react-router";

const EditShowAction = () => {
    const navigate = useNavigate();
    return (
        <TopToolbar>
            <Button
                color="primary"
                onClick={() => navigate(-1)}
                startIcon={<ArrowBack />}
            />
        </TopToolbar>
    );
};

export const CreateEvent = () => {
    return (
        <Create redirect='/events' actions={<EditShowAction />}>
            <SimpleForm>
                <TextInput source="title" />
                <DateInput source="date_of_event" defaultValue={new Date()} parse={value => new Date(value).toISOString()} />
                <TextInput source="categorie" />
                <TextInput source="description" />
                <TextInput source="location" />
                <DateInput label="Available of ticket" source="available_of_ticket" defaultValue={new Date()} parse={value => new Date(value).toISOString()} />
                <TextInput source="img" label="Image"/>
                <NumberInput source = "id_event"/>
                <NumberInput source = "stock"/>
                <NumberInput source = "price"/>
                <TextInput source = "type_of_ticket" />
            </SimpleForm>
        </Create>
    )
}