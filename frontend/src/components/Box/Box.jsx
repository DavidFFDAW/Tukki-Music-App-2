import React from 'react';
import './box.css';

export default function Box({ children }){
    return(
        <div className="box-component">
            <div className="box-rounded-box">
                { children }
            </div>
        </div>
    );
}