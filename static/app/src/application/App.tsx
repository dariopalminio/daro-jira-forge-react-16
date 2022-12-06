import React from 'react';
import ConfigStore from './component/config-store';
import styles from './App.module.css';

import SearchJql from './component/search-jql';
import InvokeIssue from './component/invoke-issue';
import Hello from './component/hello';
import Issue from './component/issue';

function App() {

    return (
        <div className={styles.app}>
           <Hello>This case tests the search for the current user, which is you, and display your name.</Hello>
           <br/>
           <Issue />
           <br/>
           <SearchJql />
           <br/>
           <ConfigStore />
           <br/>
           <InvokeIssue />
        </div>
    );
}

export default App;
