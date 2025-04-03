import { ArrowBack } from "@mui/icons-material";
import { Button, DateInput, Edit, NumberInput, SimpleForm, TextInput, TopToolbar } from "react-admin";
import { useNavigate } from "react-router-dom";

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

export const EventUpdate = () => {
    return (
        <Edit actions = {<EditShowAction/>}>
            <SimpleForm>
                <NumberInput label='ID' source='id' />
                <TextInput source='title' />
                <DateInput source="date_of_event" />
                <TextInput source="categorie" />
                <TextInput source = "description"/>
                <TextInput source="location" />
            </SimpleForm>
        </Edit>
    )
}