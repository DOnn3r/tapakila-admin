import { ArrowBack } from '@mui/icons-material';
import React from 'react';
import { Button, EditButton, NumberField, Show, SimpleShowLayout, TextField, TopToolbar } from 'react-admin';
import { useNavigate } from 'react-router';

const UserShowActions = () => {
    const redirect = useNavigate();

    return (
        <TopToolbar>
            <Button
                sx={{
                    color: "primary",
                }}
                onClick={() => redirect("/users")}
                startIcon={<ArrowBack />}
            />

            <EditButton />
        </TopToolbar>
    );
};

export const UserShow = () => {
    return (
        <Show actions={<UserShowActions/>}>
            <SimpleShowLayout>
                <NumberField source='id' />
                <TextField source='username' />
                <TextField source='email' />
            </SimpleShowLayout>
        </Show>
    );
};
