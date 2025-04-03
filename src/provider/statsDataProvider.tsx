// src/providers/statsDataProvider.ts
import { DataProvider, GetListParams, GetListResult } from "react-admin";
import { fetchUtils } from 'react-admin';

const apiUrl = 'http://localhost:1818/reservation';

export const statsDataProvider: DataProvider = {
    getList: async (resource, params) => {
        if (resource === 'stats/ticket-types') {
            const { json } = await fetchUtils.fetchJson(`${apiUrl}/stats/ticket-types`);

            return {
                data: json.map((item: any) => ({
                    id: item.type,
                    type: item.type,
                    tickets_sold: Number(item.tickets_sold)
                })),
                total: json.length,
            };
        }
        throw new Error(`Resource ${resource} not implemented`);
    },

    getOne: () => Promise.reject(new Error('Not implemented')),
    getMany: () => Promise.reject(new Error('Not implemented')),
    getManyReference: () => Promise.reject(new Error('Not implemented')),
    create: () => Promise.reject(new Error('Not implemented')),
    update: () => Promise.reject(new Error('Not implemented')),
    updateMany: () => Promise.reject(new Error('Not implemented')),
    delete: () => Promise.reject(new Error('Not implemented')),
    deleteMany: () => Promise.reject(new Error('Not implemented')),
};