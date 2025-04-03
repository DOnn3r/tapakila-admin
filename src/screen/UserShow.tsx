import React from 'react';
import { NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const UserShow = () => {
    return (
        <Show>
            <SimpleShowLayout>
                <NumberField source='id' />
                <TextField source='username' />
                <TextField source='email' />
            </SimpleShowLayout>
        </Show>
    );
};
