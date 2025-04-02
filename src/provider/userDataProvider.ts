import { CreateParams, CreateResult, DataProvider, DeleteManyParams, DeleteManyResult, DeleteParams, DeleteResult, GetListParams, GetListResult, GetManyParams, GetManyReferenceParams, GetManyReferenceResult, GetManyResult, GetOneParams, GetOneResult, Identifier, QueryFunctionContext, RaRecord, UpdateManyParams, UpdateManyResult, UpdateParams, UpdateResult } from "react-admin";

const url = "http://localhost:1818/users";

export const userDataProvider: DataProvider = {
  getList: async function <RecordType extends RaRecord = any>(resource: string, params: GetListParams & QueryFunctionContext): Promise<GetListResult<RecordType>> {
    const data = await fetch(url, { method: 'GET' });
    const userList = await data.json();

    return {
      data: userList,
      total: userList.length,
    };
  },
  getOne: async function <RecordType extends RaRecord = any>(resource: string, params: GetOneParams<RecordType> & QueryFunctionContext): Promise<GetOneResult<RecordType>> {
    const { id } = params;
    const response = await fetch(`${url}/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const [user] = await response.json();

    if (!user) {
      throw new Error('User not found');
    }

    return {
      data: user
    };
  },
  getMany: function <RecordType extends RaRecord = any>(resource: string, params: GetManyParams<RecordType> & QueryFunctionContext): Promise<GetManyResult<RecordType>> {
    throw new Error("Function not implemented.");
  },
  getManyReference: function <RecordType extends RaRecord = any>(resource: string, params: GetManyReferenceParams & QueryFunctionContext): Promise<GetManyReferenceResult<RecordType>> {
    throw new Error("Function not implemented.");
  },
  update: async function <RecordType extends RaRecord = any>(resource: string, params: UpdateParams): Promise<UpdateResult<RecordType>> {
    const { data: editedUser, id } = params;
    const response = await fetch(`${url}/update/${id}`, { method: "PUT", body: JSON.stringify(editedUser) });
    const user = await response.json();

    return {
      data: user,
    };
  },
  updateMany: function <RecordType extends RaRecord = any>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> {
    throw new Error("Function not implemented.");
  },
  create: async function <RecordType extends Omit<RaRecord, "id"> = any, ResultRecordType extends RaRecord = RecordType & { id: Identifier; }>(resource: string, params: CreateParams): Promise<CreateResult<ResultRecordType>> {
    const { data } = params;

    try {
      const response = await fetch(`${url}/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Erreur serveur");
      }

      return await response.json();

    } catch (error) {
      console.error("Erreur création:", error);
      throw error;
    }
  },
  delete: async function <RecordType extends RaRecord = any>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> {
    const { id } = params;
    const response = await fetch(`${url}/delete/${id}`, {
      method: "DELETE"
    });

    return {
      data: { id },
    };
  },
  deleteMany: function <RecordType extends RaRecord = any>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
    throw new Error("Function not implemented.");
  }
}