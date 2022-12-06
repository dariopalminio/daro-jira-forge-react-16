import { useEffect, useState } from "react";
import useJiraHook from "../../domain/hook/jira-hook";
import Button from "../common/button/button";
import TextField from "../common/text-field/text-field";


const SearchJql: React.FC = () => {
    const jqlDefault: string = "project=TKP and issuetype = Epic order by created DESC";
    const { searchJql } = useJiraHook();
    const [total, setTotal] = useState('none');
    const [value, setValue] = useState<string>(jqlDefault);
    const [isValid, setIsValid] = useState<boolean>(true);

    const getDatas = async () => {
        try {
            const data = await searchJql(value);
            if (data.total) setTotal(data.total)
            console.log('SearchJql data:', data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        //getDatas()
    }, []);

    const handleOnClick = () => {
        getDatas()
    }

    const handleChange = async (val: string) => {
        setValue(val);
        if (val === '') {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    };

    return (
        <div>
            <h2>Test 3: This search using requestJira with POST and JQL</h2>

            <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                <div style={{ float: 'left', width: '80%', alignItems: 'center' }}>
                    <TextField
                        id="standard-basic-1"
                        label={'JQL'}
                        placeholder="Here text..."
                        onChange={(e) => handleChange(e.target.value)}
                        value={value}
                        {...(!isValid && { error: true, helperText: 'input error' })}
                    />
                </div>
                <div style={{ marginLeft: '10px', marginTop: '20px'}}>
                    <Button onClick={() => handleOnClick()} style={{ float: 'right' }}>Search</Button>
                </div>
            </div>

            <p>Results Total (issues count): {total}</p>
        </div>
    );
};

export default SearchJql;
