import React, {useState,useEffect }from 'react';
import PropTypes from 'prop-types';
import useClock from '../../hooks/useClock';
import './BetterClock.scss'


function BetterClock() {
    const {timeString} = useClock();
    return (
        <div className="Better-clock">
            <p className="Better-clock__time">{timeString}</p>
        </div>
    );
}

export default BetterClock;