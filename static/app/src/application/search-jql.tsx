import { useEffect, useState } from "react";
import { requestJira } from '@forge/bridge';


const SearchJql: React.FC = () => {

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


      const fetchJQLSearch = async () => {
        const response = await requestJira(`/rest/api/3/search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        console.log('data:',data);
        console.log('sytatus:',response.status);
        return data;
      };


    useEffect(() => {
        const getDatas = async () => {
            try {
                await fetchJQLSearch();
            } catch (error) {
                console.log(error);
            }
        }
        getDatas()
    },[]);

    return (
        <div>
            <h2>Test 3: This search using requestJira with POST and JQL</h2>
        </div>
    );
};

export default SearchJql;
