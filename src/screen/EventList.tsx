import { makeStyles } from '@mui/material';
import { Datagrid, DateField, List, SearchInput, TextField, TextInput} from 'react-admin';

export const EventList = () => {
  return (
    <List exporter={false} pagination={false}> 
      <Datagrid bulkActionButtons={false}>
        <TextField source='id' />
        <TextField source='title' />
        <TextField source='categorie' />
        <DateField source='date_of_event' />
        <TextField source='location' />
      </Datagrid>
    </List>
  );
};