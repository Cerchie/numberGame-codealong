import React from 'react';

const Clicker = () => {
    const fireLazers = (e) => { 
        const data = {age: 78, name: 'willy wonka'}
        console.log(data)
        data.age = null;
    };
    return (
    <>
    <textarea onScroll={fireLazers}> ahfgaip </textarea>
    <button onMouseOver={fireLazers}> CLICK ME!</button>
    </>
    )

        
}

export default Clicker;