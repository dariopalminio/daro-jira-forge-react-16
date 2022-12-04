import React from 'react';
import styles from './App.module.css';
import Hello from './components/Hello';
import Issue from './components/Issue';

function App() {

    return (
        <div>
           <Hello>I am Daro!</Hello>
           <Issue />
        </div>
    );
}

export default App;
