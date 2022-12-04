import Resolver from '@forge/resolver';
//import { storage } from '@forge/api';

const resolver = new Resolver();

resolver.define('getText', (req) => {
    console.log(req);

    return 'The invoke bridge method enables custom UI apps to run backend FaaS functions hosted by Atlassian.';
});

export const handler = resolver.getDefinitions();

