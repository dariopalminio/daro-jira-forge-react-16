import { useContext, useState } from 'react';
import JiraApiImpl from '../../infrastructure/api/jira-api.impl';
import { IJiraApi } from '../outgoing/jira-api.interface';
import { IHookState, InitialState } from './hook.type';


/**
 * Custom hook
 * 
 * @returns 
 */
export default function useJiraHook() {

    const [state, setState] = useState<IHookState>(InitialState);
    const jiraApi: IJiraApi = JiraApiImpl();

    const getIssueData = async (key: string) => {
        setState({ isProcessing: true, hasError: false, msg: '', isSuccess: false });
        try {
            const data: any = await jiraApi.getIssueData(key);
            return data;
        } catch (error) {
            console.error(error);
        }
    };

    const getIssueDataByInvoke = async (key: string) => {
        setState({ isProcessing: true, hasError: false, msg: '', isSuccess: false });
        try {
            const data: any = await jiraApi.getIssueDataByInvoke(key);
            return data;
        } catch (error) {
            console.error(error);
        }
    };


    const searchJql = async (jql: string) => {
        setState({ isProcessing: true, hasError: false, msg: '', isSuccess: false });
        //const jql: string = "project=TKP and issuetype = Epic order by created DESC";
        try {
            const data: any = await jiraApi.searchJql(jql);
            return data;
        } catch (error) {
            console.error(error);
        }
    };

    return {
        isProcessing: state.isProcessing,
        hasError: state.hasError,
        msg: state.msg,
        isSuccess: state.isSuccess,
        getIssueData,
        getIssueDataByInvoke,
        searchJql
    };
};