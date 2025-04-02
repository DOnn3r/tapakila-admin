import { ArrowBack } from "@mui/icons-material";
import { Create, SimpleForm, TextInput, DateInput, Button, TopToolbar, NumberInput, ImageField, ImageInput } from "react-admin"
import { useNavigate } from "react-router";

const EditShowAction = () => {
    const navigate = useNavigate();
    return (
        <TopToolbar>
            <Button
                sx={{
                    backgroundColor: '#13274F',
                    color: 'white',
                }}
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
                <ImageInput source="pictures" accept={{ 'image/*': ['.png', '.jpg'] }} placeholder={<p>Drop your file here</p>}>
                    <ImageField source="src" title="title" />
                </ImageInput>
                <TextInput source="title" />
                <DateInput source="date_of_event" defaultValue={new Date()} parse={value => new Date(value).toISOString()} />
                <TextInput source="categorie" />
                <TextInput source="location" />
                <DateInput label="Available of ticket" source="available_of_ticket" defaultValue={new Date()} parse={value => new Date(value).toISOString()} />
            </SimpleForm>
        </Create>
    )
}