import { requestJira } from '@forge/bridge';
import { invoke } from '@forge/bridge';
import { IJiraApi } from '../../domain/outgoing/jira-api.interface';

export default function JiraApiImpl(): IJiraApi {


    async function getIssueData(key: string): Promise<any> {
        try {
            const response = await requestJira(`/rest/api/3/issue/${key}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };


    async function getIssueDataByInvoke(key: string): Promise<any> {
        try {
            console.log('--->InvokeIssue');
            const data: any = await invoke('getIssueData', { issueKey: 'TKP-1' });
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return {
        getIssueData,
        getIssueDataByInvoke
    };
};