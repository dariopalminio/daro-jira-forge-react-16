import { invoke } from '@forge/bridge';
import { IStorageApi } from '../../domain/outgoing/storage-api.interface';

/**
 * Storage API
 * This resource provides methods to store values in Forge app storage.
 * Data stored using the Storage API isn't shared between Forge apps on the same site or across different Atlassian sites.
 * The Storage API requires your app to have the storage:app scope. 
 */
export default function StorageApiImpl(): IStorageApi {


    async function getConfigStorage(key: string): Promise<any> {
        try {
            console.log('--->InvokeIssue');
            const payload = {
                key: key
            };
            const info: any | null = await invoke('getConfigStorage', payload);
            return info;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    /**
     * Stores a JSON value with a specified key. 
     * Forge resolves write conflicts using a last-write-wins strategy.
     * @returns 
     */
    async function setConfigStorage(key: string, data: any): Promise<any> {
        try {
            const payload = {
                key: key, //'CONFIG'
                data: data
            };
            const info: any | null = await invoke('setConfigStorage', payload);
            return info;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return {
        getConfigStorage,
        setConfigStorage
    };
};