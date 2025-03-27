import { ArrowBack } from '@mui/icons-material';
import React from 'react';
import { Button, DateField, Show, SimpleShowLayout, TextField, TopToolbar } from 'react-admin';
import { useNavigate } from 'react-router';


const PostShowActions = () => {
    const navigate = useNavigate();
    return (
        <TopToolbar>
            <Button
                color="primary"
                onClick={() => navigate(-1)}
                startIcon={<ArrowBack />}
            >Back</Button>
        </TopToolbar>
    );
};


export const EventShow = () => {
    return (
        <Show actions = {<PostShowActions/>}>
            <SimpleShowLayout>
                <TextField label='ID' source='id' />
                <TextField source="name" />
                <DateField label="Date of event" source="date_of_event" />
            </SimpleShowLayout>
            <Button />
        </Show>
    );
};
