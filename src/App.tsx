import React from "react";
import Routing from "./components/Login/Routing";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Routing />
            </Router>
        </div>
    );
}

export default App;
