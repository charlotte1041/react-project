import React from 'react';

const Loading=(props)=>{
    let show=props.show;
    let loading=<div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
        </div>;
    return(
        <div>
            {show?loading:''}
        </div>
    )
}

export default Loading;
