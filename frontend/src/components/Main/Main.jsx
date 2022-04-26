import React from 'react';
import './main-body.css';


export default function Main({ children }){

    return(
        <div className="main-body">
            { children }
        </div>
    );
}