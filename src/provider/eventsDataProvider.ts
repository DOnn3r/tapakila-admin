import { CreateParams, CreateResult, DataProvider, DeleteManyParams, DeleteManyResult, DeleteParams, DeleteResult, GetListParams, GetListResult, GetManyParams, GetManyReferenceParams, GetManyReferenceResult, GetManyResult, GetOneParams, GetOneResult, Identifier, QueryFunctionContext, RaRecord, UpdateManyParams, UpdateManyResult, UpdateParams, UpdateResult } from "react-admin";

const url = "http://localhost:1818/events";

export const eventDataProvider: DataProvider = {
    getList: async function <RecordType extends RaRecord = any>(): Promise<GetListResult<RecordType>> {
        const data = await fetch(url, { method: "GET" });
        const events = await data.json();

        return {
            data: events,
            total: 10,
        };
    },
    getOne: async function <RecordType extends RaRecord = any>(
        resource: string,
        params: GetOneParams<RecordType> & QueryFunctionContext
    ): Promise<GetOneResult<RecordType>> {
        const { id } = params;
        const response = await fetch(`${url}/${id}`, { method: 'GET' });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const event= await response.json();

        if (!event) {
            throw new Error('Event not found');
        }

        return {
            data: event,
        };
    },
    getMany: function <RecordType extends RaRecord = any>(): Promise<GetManyResult<RecordType>> {
        throw new Error("Function not implemented.");
    },
    getManyReference: function <RecordType extends RaRecord = any>(): Promise<GetManyReferenceResult<RecordType>> {
        throw new Error("Function not implemented.");
    },
    update: async function <RecordType extends RaRecord = any>(resource: string, params: UpdateParams): Promise<UpdateResult<RecordType>> {
        const { data: editedEvent, id } = params;
        const response = await fetch(`${url}/update/${id}`, { method: "PUT", body: JSON.stringify(editedEvent) });
        const event = await response.json();

        return {
            data: event,
        };
    },
    create: async function <RecordType extends Omit<RaRecord, "id"> = any>(
        resource: string,
        params: CreateParams<RecordType>
    ): Promise<CreateResult<RecordType & { id: Identifier }>> {
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
    updateMany: function <RecordType extends RaRecord = any>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> {
        throw new Error("Function not implemented.");
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