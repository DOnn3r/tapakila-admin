import { Button } from '@mui/material';
import { Datagrid, DateField, List, TextField } from 'react-admin';

export const EventList = () => {
  return (
    <List >
      <Datagrid>
        <TextField source='name' />
        <TextField source='categorie'/>
        <DateField source='date_of_event' />
        <TextField source='location' />
      </Datagrid>
    </List>
  );
};