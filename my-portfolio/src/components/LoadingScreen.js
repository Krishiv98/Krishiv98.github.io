import React from 'react';

import * as Loader from 'react-loader-spinner';


export function Loading() {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                verticalAlign: 'center',
                
            }}
        >
  
            
            <Loader.RotatingTriangles
                visible={true}
                height="150"
                width="150"
                ariaLabel="rotating-triangels-loading"
                wrapperStyle={{}}

                wrapperClass="rotating-triangels-wrapper"
            />
        </div>
    );
}
