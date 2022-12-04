import React from 'react';
//import styles from './App.module.css';
import Hello from './components/Hello';
import Issue from './components/Issue';
import SearchJql from './components/search-jql';

function App() {

    return (
        <div>
           <Hello>I am Daro!</Hello>
           <Issue />
           <SearchJql />
        </div>
    );
}

export default App;
