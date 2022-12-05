import Resolver from '@forge/resolver';
import { storage } from '@forge/api';
import api, { route } from "@forge/api";

const resolver = new Resolver();

resolver.define('getIssueData', async ({ payload, context }) => {
    const issueKey = payload.issueKey;
    const response = await api
        .asUser()
        .requestJira(route`/rest/api/3/issue/${issueKey}`);
    const issueData = await response.json();
    return issueData;
});

resolver.define('getText', (req) => {
    console.log(req);
    return 'The invoke bridge method enables custom UI apps to run backend FaaS functions hosted by Atlassian.';
});

//save in storage
resolver.define('setConfigStorage', async ({ payload, context }) => {

    const configRecord = {
        ...payload,
    };

    //Method signature: storage.set(key: string, value: array | boolean | number | object | string ): Promise<void>;
    await storage.set('CONFIG', configRecord);

    return configRecord;
});

//get from storage
resolver.define('getConfigStorage', () => {

    //storage.get(key: string): Promise<array | boolean | number | object | string>;

    return storage.get('CONFIG');
});

export const handler = resolver.getDefinitions();

