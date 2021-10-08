import React from 'react';
import Answer from './answer/answer';
import Info from './info/info';
import Solution from './solution/solution';

const Body = (props) => {
    return(
        <>
            <Info/>
            <Solution/>
            <Answer/>
        </>
    )
}

export default Body;