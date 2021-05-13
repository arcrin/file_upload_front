import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import MacAddressTable from "./components/MacAddressTable";
import "./App.css"

import FileUpload from "./components/FileUpload";


const App = () => {
    return (
        <div className="container" style={{width: "600px"}}>
            <div className="my-3">
                <h3>MAC address lookup</h3>
            </div>
            <FileUpload/>
            <MacAddressTable/>
        </div>
    );
};

export default App;
