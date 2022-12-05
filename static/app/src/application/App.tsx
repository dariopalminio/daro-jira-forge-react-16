import React from 'react';
import Config from './Config';
//import styles from './App.module.css';
import Hello from './Hello';
import InvokeIssue from './InvokeIssue';
import Issue from './Issue';
import SearchJql from './search-jql';

function App() {

    return (
        <div>
           <Hello>I am Daro!</Hello>
           <Issue />
           <SearchJql />
           <Config />
           <InvokeIssue />
        </div>
    );
}

export default App;
