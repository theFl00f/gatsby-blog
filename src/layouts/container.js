import React from 'react';

export default function Container({ children, classInput }) {
    return (
        <div className={classInput}>
            {children}
        </div>
    )
}