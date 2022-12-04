import { useEffect, useState } from "react";
import { invoke } from '@forge/bridge';

interface IProps {
    children?: React.ReactNode;
}

const Hello: React.FC<IProps> = (props: IProps) => {
    const [data, setData] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const info: string = await invoke('getText', { example: 'my-invoke-variable' });
                setData(info);
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, []);

    return (
        <div>
            <h1>Hello</h1>
            {props.children}
            <p>Info: {data}</p>
        </div>
    );
};

export default Hello;
