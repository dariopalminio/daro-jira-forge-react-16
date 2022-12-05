import { useEffect, useState } from "react";
import { requestJira } from '@forge/bridge';


const Issue: React.FC = () => {

    const [apiData, setApiData] = useState<any>()
    const [status, setStatus] = useState('')


    const fetchData = async (key: string) => {
        console.log('**************');
        const response = await requestJira(`/rest/api/3/issue/${key}`);
        const data = await response.json();
        console.log('data:', data);
        console.log('sytatus:', response.status);
        return data;
    };

    useEffect(() => {
        const getDatas = async () => {
            try {
                setApiData(await fetchData('TKP-1'));
            } catch (error) {
                console.log(error);
            }
        }
        getDatas()
    }, []);

    return (
        <div>
            <h2>Test 2: This search the issue with id TKP-1 using forge/bridge</h2>
            <p>Response data.key: {apiData?.key}</p>
            <p>summary: {apiData?.fields?.summary}</p>
        </div>
    );
};

export default Issue;
