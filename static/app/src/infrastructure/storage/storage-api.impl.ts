import { requestJira } from '@forge/bridge';
import { invoke } from '@forge/bridge';
import { IStorageApi } from '../../domain/outgoing/storage-api.interface';

export default function StorageApiImpl(): IStorageApi {


    async function getConfigStorage(): Promise<any> {
        try {
            console.log('--->InvokeIssue');
            const info: any | null = await invoke('getConfigStorage', );
            return info;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    async function setConfigStorage(): Promise<any> {
        try {
            const info: any | null = await invoke('setConfigStorage', {date: (new Date).toString()});
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