import React from 'react';
const ButtonGroup = () => {
    const printColor = (color) => {
        console.log(`YOU CLICKED: ${color.toUpperCase()}`)
    }
    return (
        <div>
            <button onClick={() => printColor('red')}>Red</button>
            <button onClick={() => printColor('yellow')}>Yellow</button>
            <button onClick={() => printColor('green')}>Green
            </button>
        </div>
    )
}

export default ButtonGroup;