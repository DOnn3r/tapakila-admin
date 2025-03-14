import { CreateParams, CreateResult, DataProvider, DeleteManyParams, DeleteManyResult, DeleteParams, DeleteResult, GetListParams, GetListResult, GetManyParams, GetManyReferenceParams, GetManyReferenceResult, GetManyResult, GetOneParams, GetOneResult, Identifier, QueryFunctionContext, RaRecord, UpdateManyParams, UpdateManyResult, UpdateParams, UpdateResult } from "react-admin";

const url = "http://localhost:3000/users";

export const userDataProvider= {
    getList: async function <RecordType extends RaRecord = any>(params: GetListParams & QueryFunctionContext): Promise<GetListResult<RecordType>> {
        const data = await fetch(url, { method: 'GET' });
        const userList = await data.json();
    
        return {
          data: userList,
          total: 4,
        };
      },
      getOne: async function <RecordType extends RaRecord = any>(params: GetOneParams<RecordType> & QueryFunctionContext): Promise<GetOneResult<RecordType>> {
        const { id } = params;
        const data = await fetch(`${url}/${id}`, { method: 'GET' });
        const user = await data.json();
    
        return {
          data: user,
        };
      },
      update: async function <RecordType extends RaRecord = any>(params: UpdateParams): Promise<UpdateResult<RecordType>> {
        const { data: editedUser, id } = params;
        const data = await fetch(`${url}/${id}`, { method: 'PUT', body: JSON.stringify(editedUser) });
        const user = await data.json();
        return {
          data: user,
        };
      },
}