import { requestJira } from '@forge/bridge';
import { invoke } from '@forge/bridge';
import { IJiraApi } from '../../domain/outgoing/jira-api.interface';

/**
 * Jira API
 * 
 * The Jira API uses REST API and enables you to interact with Jira programmatically.  
 * This Calls to back-end resolver using invoke and the back-end call to Jira REST API with asUser or asApp.
 * Other strategy is to use requestJira, it communicates directly with jira without going through the Back-end.
 */
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


    async function searchJql(jql: string) : Promise<any> {
        try {
            const body = {
                "expand": [
                    "names",
                    "schema",
                    "children",
                    "descendants"
                ],
                "jql": jql,
                "maxResults": 15,
                "fieldsByKeys": false,
                "fields": [
                    "summary",
                    "status",
                    "assignee",
                    "issuelinks",
                    "duedate",
                    "created",
                    "customfield_10015"
                ],
                "startAt": 0
            };
            const response = await requestJira(`/rest/api/3/search`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(body)
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };


    return {
        getIssueData,
        getIssueDataByInvoke,
        searchJql
    };
};