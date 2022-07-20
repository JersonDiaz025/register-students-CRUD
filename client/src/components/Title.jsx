import React from 'react';

const Title = (props) => {
    return (
        <div>
            <div className={`${props.styles}`}>{props.data}</div>
        </div>
    );
}

export default Title;
