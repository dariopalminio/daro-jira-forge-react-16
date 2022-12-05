import { useEffect, useState } from "react";
import { requestJira } from '@forge/bridge';
import useJiraHook from "../../domain/hook/jira-hook";


const SearchJql: React.FC = () => {
    const { searchJql } = useJiraHook();
    const [ total, setTotal] = useState('none');

    useEffect(() => {
        const getDatas = async () => {
            try {
                const data = await searchJql();
                if (data.total) setTotal(data.total)
                console.log('SearchJql data:',data);
            } catch (error) {
                console.log(error);
            }
        }
        getDatas()
    },[]);

    return (
        <div>
            <h2>Test 3: This search using requestJira with POST and JQL</h2>
            <p>Results Total (issues count): {total}</p>
        </div>
    );
};

export default SearchJql;
