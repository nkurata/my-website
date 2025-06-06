import React from 'react';
import '../styles/Loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <div className="spinner"></div>
            <div className="newtons-cradle">
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
            </div>
        </div>
    );
};

export default Loader;