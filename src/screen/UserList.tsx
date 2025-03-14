import { Button } from '@mui/material';
import { Datagrid, List, TextField } from 'react-admin';

export const UserList = () => {
  return (
    <List >
      <Datagrid>
        <TextField source='id' />
        <TextField source='first_name' />
        <TextField source='last_name' />
        <TextField source='age' />
      </Datagrid>
    </List>
  );
};