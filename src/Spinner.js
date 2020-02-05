import React from 'react';

const Spinner = (props) => {
    return(
    <div class="ui active dimmer">
        <div class="ui text loader">{props.message}</div>
    </div>
    );
};

Spinner.defaultProps = { //if no message prop was received, this will be the default value of it
    message: 'Loading...'
}

export default Spinner