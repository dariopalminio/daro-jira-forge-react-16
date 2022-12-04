import { useEffect, useState } from "react";
import api, { route } from '@forge/api';
import { requestJira } from '@forge/bridge';



const Issue: React.FC = () => {

    const [apiData, setApiData] = useState<any>()
    const [status, setStatus] = useState('')

    const body = {
        "expand": [
            "names",
            "schema",
            "children",
            "descendants"
        ],
        "jql": "project=TKP and issuetype = Epic order by created DESC",
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

    const fetchData = async (key: string) => {
        console.log('**************');
        const response = await requestJira(`/rest/api/3/issue/${key}`);
        const data = await response.json();
        console.log('data:',data);
        console.log('sytatus:',response.status);
        return data;
      };

    useEffect(() => {
        const getDatas = async () => {
            try {
                console.log("****************************** useEffect");
                // Authenticated
                //api.[asApp | asUser]().requestJira(path[, options]) => Promise<Response>
                /*
                const response = await api.asUser().requestJira(route`/rest/api/3/search`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": 'K2wrCQcGpiByZ6EXemD3683B'
                    },
                    body: JSON.stringify(`${body}`)
                });
                */
                setApiData(await fetchData('TKP-1'));
            } catch (error) {
                console.log(error);
            }
        }
        getDatas()
    },[]);

    return (
        <div>
            <h2>This search the issue with id TKP-1 using forge/bridge</h2>
            <p>Response data.key: {apiData?.key}</p>
            <p>summary: {apiData?.fields?.summary}</p>
        </div>
    );
};

export default Issue;
