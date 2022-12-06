import { useEffect, useState } from "react";
import { invoke } from '@forge/bridge';
import useJiraHook from "../../domain/hook/jira-hook";

interface IProps {
    children?: React.ReactNode;
}

const Hello: React.FC<IProps> = (props: IProps) => {
    const [data, setData] = useState('');
    const [name, setName] = useState<string | undefined>('');
    const { getCurrentUsername } = useJiraHook();

    useEffect(() => {
        const getData = async () => {
            try {
                const info: string = await invoke('getText', { example: 'my-invoke-variable' });
                setData(info);
                const infoName: string | undefined = await getCurrentUsername();
                setName(infoName);
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, []);

    return (
        <div>
            <h2>Test 1: Hello</h2>
            {props.children}
            <p>Info: {data}</p>
            <p>Current user name: {name}</p>
        </div>
    );
};

export default Hello;
