import { Button } from '@mui/material';
import { Datagrid, List, TextField } from 'react-admin';

export const EventList = () => {
  return (
    <List >
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <TextField source='date_of_event' />
        <TextField source='category' />
        <TextField source='location' />
      </Datagrid>
    </List>
  );
};