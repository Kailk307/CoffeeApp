import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  Create,
} from "react-admin";

// ... Các components khác

export const listUser = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="password" />
      <TextField source="address" />
      <TextField source="phone" />
      <TextField source="name" />

      <EditButton />
    </Datagrid>
  </List>
);

export const editUser = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="password" />
      <TextInput source="address" />
      <TextInput source="phone" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const createUser = (props) => (
  <Create {...props}>
    <SimpleForm>
       <TextInput source="username" />
      <TextInput source="password" />
      <TextInput source="address" />
      <TextInput source="phone" />
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);
