import React from "react";
import {Spinner} from "./Loader.styled"
import "./loader.css"


function Loader() {
    return (
        <div style={{height: '257px', display: 'flex', justifyContent: 'center'}}>
            <div className="loader">Loading...</div>
        </div>
    );
}

export default Loader;