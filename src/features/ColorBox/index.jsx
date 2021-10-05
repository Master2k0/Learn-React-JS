import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};

function ColorBox(props) {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('white');
    return (
        <div>
            {color}
            <button onClick={() => setColor('black')}>Change to Black</button>
            <button onClick={() => setColor('white')}>Change to White</button>

            {count}
            <button onClick={() => setCount(count => count + 1)}>Increase</button>
            <button onClick={() => setCount(count => count - 1)}>Decrease</button>

        </div>

    );
}

export default ColorBox;