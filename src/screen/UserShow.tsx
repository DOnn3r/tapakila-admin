import React from 'react';
import { NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const UserShow = () => {
    return (
        <Show>
            <SimpleShowLayout>
                <TextField source='id' />
                <TextField source='first_name' />
                <TextField source='last_name' />
                <NumberField source='age' />
            </SimpleShowLayout>
        </Show>
    );
};
