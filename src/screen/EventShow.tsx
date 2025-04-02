import { ArrowBack } from '@mui/icons-material';
import { Button, DateField, EditButton, Show, SimpleShowLayout, TextField, TopToolbar } from 'react-admin';
import { useNavigate } from 'react-router';

const EventShowActions = () => {
    const redirect = useNavigate();

    return (
        <TopToolbar>
            <Button
                sx={{
                    backgroundColor: '#13274F',
                    color: 'white',
                }}
                onClick={() => redirect(-1)}
                startIcon={<ArrowBack />}
            />

            <EditButton />
        </TopToolbar>
    );
};

export const EventShow = () => {
    return (
        <Show actions={<EventShowActions />}>
            <SimpleShowLayout>
                <TextField label='ID' source='id' />
                <TextField source="title" />
                <DateField label="Date of event" source="date_of_event" />
                <TextField source="categorie" label="Category" />
                <TextField source="location" />
            </SimpleShowLayout>
            <Button />
        </Show>
    );
};
