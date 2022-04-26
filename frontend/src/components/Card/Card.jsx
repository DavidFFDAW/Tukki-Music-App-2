import React from 'react';
import { useHistory } from 'react-router-dom';
import './card.css';

export default function Card({ img, id, title, content, width, href } = { width: 300 }) {
    const history = useHistory();

    const handleClick = () => {
        history.push(`${ href }/${ id }`);
    }

    return (
        <>
            <div className="card" onClick={ handleClick }>
                <div id={ id } className="flex flex-center" style={{ width: width }}>
                    <div>
                        <div className="flex flex-center">
                            <div className="card-img"></div>
                        </div>
                        <div className="card-title">
                            <span>{ title }</span>
                        </div>
                        <div className="card-content">
                            <p>{ content }</p>
                        </div>
                    </div>
                </div>                
            </div>
        </>    
    );
}