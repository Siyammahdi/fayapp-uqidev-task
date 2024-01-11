import React from 'react';

const BriefText = ({children}) => {
    return (
        <div>
            <p className='font-bold'>{children}</p>
        </div>
    );
};

export default BriefText;