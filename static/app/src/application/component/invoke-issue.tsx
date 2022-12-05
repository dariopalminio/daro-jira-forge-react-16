import { useEffect, useState } from "react";
import useJiraHook from "../../domain/hook/jira-hook";

const InvokeIssue: React.FC = () => {
    const { getIssueDataByInvoke } = useJiraHook();
    const [apiData, setApiData] = useState<any>()

    useEffect(() => {
        const getData = async () => {
            try {
                console.log('--->InvokeIssue');
                const info: string = await getIssueDataByInvoke('TKP-1');
                setApiData(info);
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, []);

    return (
        <div>
            <h2>Test 5: This search the issue with id TKP-1 using invoke from forge/bridge</h2>
            <p>Response data.key: {apiData?.key}</p>
            <p>summary: {apiData?.fields?.summary}</p>
        </div>
    );
};

export default InvokeIssue;
