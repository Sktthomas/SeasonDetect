import './seasonDisplay.css';
import React from 'react';


const seasonConfig = { //Config object that holds our text and icon names for whether it's summer or winter
    summer: {
        seasonText: 'Let\'s hit the beach!',
        seasonIcon: 'sun'
    },
    winter: {
        seasonText: 'Brrrr it\'s cold!',
        seasonIcon: 'snowflake'
    },
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
       return lat > 0 ? 'summer' : 'winter'; //Ternary expression that goes: 'Is latitude greater than 0? If so it's summer, otherwise it's winter
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = props => { //Remember to set props as arguments to use it!

    const season = getSeason(props.lat, new Date().getMonth());
    const {seasonText, seasonIcon} = seasonConfig[season] //pulls out season text and seasonIcon from our config file, depending on the season.
return( 
    <div className={`season-display ${season}`}> {/* It is good coding procedure to call the root div the same as the component */}
        <i className={`icon-left massive ${seasonIcon} icon`}/> {/* Backtick expression that inserts the result of the seasonIcon helper function as a string */}
        <h1>{seasonText}
        </h1>
        <i className={`icon-right massive ${seasonIcon} icon`}/>
    </div>
);
}

export default SeasonDisplay