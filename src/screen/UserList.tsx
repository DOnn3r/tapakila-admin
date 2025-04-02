import { Datagrid, List, TextField } from 'react-admin';

export const UserList = () => {
  return (
    <List exporter={false}>
      <Datagrid>
        <TextField source='id'/>
        <TextField source='username' />
        <TextField source='email' />
      </Datagrid>
    </List>
  );
};