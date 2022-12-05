import React from 'react';
import ConfigStore from './component/config-store';
//import styles from './App.module.css';

import SearchJql from './component/search-jql';
import InvokeIssue from './component/invoke-issue';
import Hello from './component/hello';
import Issue from './component/issue';

function App() {

    return (
        <div>
           <Hello>I am Daro!</Hello>
           <Issue />
           <SearchJql />
           <ConfigStore />
           <InvokeIssue />
        </div>
    );
}

export default App;
