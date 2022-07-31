import React from 'react';

const Title = (props) => {
    return (
        <div>
             <em className={`${props.stylesCount}`}>{props?.count}</em>
            <div className={`${props.stylesTitle} ${props.styles}`}>{props?.data}</div>
        </div>
    );
}

export default Title;
