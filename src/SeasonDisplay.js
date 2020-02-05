import React from 'react';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
       return lat > 0 ? 'summer' : 'winter'; //Ternary expression that goes: 'Is latitude greater than 0? If so it's summer, otherwise it's winter
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = props => { //Remember to set props as arguments to use it!

    const season = getSeason(props.lat, new Date().getMonth());
    const seasonText = season === 'winter' ? 'Brrr it is chilly!' : 'Let\'s hit the beach!'
    const seasonIcon = season === 'winter' ? 'snowflake' : 'sun';

return( 
    <div>
        <i className={`${seasonIcon} icon`}/> {/* Backtick expression that inserts the result of the seasonIcon helper function as a string */}
        <h1>{seasonText}
        </h1>
        <i className={`${seasonIcon} icon`}/>
    </div>
);
}

export default SeasonDisplay