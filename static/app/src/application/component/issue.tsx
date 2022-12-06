import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useJiraHook from "../../domain/hook/jira-hook";


const Issue: React.FC = () => {

    const [apiData, setApiData] = useState<any>()
    const { getIssueData } = useJiraHook();
    const { t } = useTranslation();
    
    useEffect(() => {
        const getDatas = async () => {
            try {
                setApiData(await getIssueData('TKP-1'));
            } catch (error) {
                console.log(error);
            }
        }
        getDatas()
    }, []);

    return (
        <div>
            <h2>{t('test')} 2: This search the issue with id TKP-1 using forge/bridge</h2>
            <p>Response data.key: {apiData?.key}</p>
            <p>summary: {apiData?.fields?.summary}</p>
        </div>
    );
};

export default Issue;
