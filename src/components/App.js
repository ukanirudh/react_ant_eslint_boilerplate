import React, { Component } from "react";
import TestApp from './testApp.js'
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App!</h1>
                <TestApp />
            </div>
        );
    }
}

export default App;
