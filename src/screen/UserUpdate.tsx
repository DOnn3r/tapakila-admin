import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export const UserUpdate = ()=>(
  < Edit >
    <SimpleForm>
      <TextInput label='ID' source='id' />
      <TextInput source='first_name' />
      <TextInput source="last_name" />
      <NumberInput source="age" />
      <TextInput source="email" />
    </SimpleForm>
  </Edit >
)