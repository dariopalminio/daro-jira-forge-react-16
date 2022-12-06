import { useEffect, useState } from "react";
import { invoke } from '@forge/bridge';
import { useTranslation } from "react-i18next";

interface IProps {
    children?: React.ReactNode;
}

const Hello: React.FC<IProps> = (props: IProps) => {
    const [data, setData] = useState('');
    const { t } = useTranslation();

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
            <h2>{t('test')} 1: Hello</h2>
            {t('hello.worl')}: {props.children}
            <p>Info: {data}</p>
        </div>
    );
};

export default Hello;
