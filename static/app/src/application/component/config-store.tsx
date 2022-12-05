import { useEffect, useState } from "react";
import { invoke } from '@forge/bridge';



const ConfigStore: React.FC = () => {
    const [configData, setConfigData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                //Promise<array | boolean | number | object | string>
                const info: any | null = await invoke('getConfigStorage', );
                console.log('******getConfigStorage info:', info);
                console.log('******getConfigStorage info typeof:', typeof info);
                setConfigData(info);
            } catch (error) {
                console.log(error);
            }
        }
        const setData = async () => {
            try {
                //info: Promise<array | boolean | number | object | string>
                const info: any | null = await invoke('setConfigStorage', {date: (new Date).toString()});
            } catch (error) {
                console.log(error);
            }
        }
        getData()
        setData()
    }, []);

    return (
        <div>
            <h2>Test 4: Config Data</h2>
            <p>data: {configData !==null? JSON.stringify(configData) : 'null'}</p>
        </div>
    );
};

export default ConfigStore;