import React from 'react';

const ProgressBar = ({ value }) => {
    const percentage = Math.round(value);
    return (
        <div className="progress-container">
            <strong>Overall Progress:</strong>
            <div className="progress-bar">
                <div 
                    className="progress-bar-fill" 
                    style={{ width: `${percentage}%` }}
                >
                    {percentage}%
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;