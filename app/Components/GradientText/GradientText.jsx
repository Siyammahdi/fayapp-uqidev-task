import clsx from 'clsx';
import React from 'react';

const GradientText = ({children, className}) => {
    return (
        <div>
            <h2 className={clsx("text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-orange-300", className)}>
                {children}
            </h2>
        </div>
    );
};

export default GradientText;