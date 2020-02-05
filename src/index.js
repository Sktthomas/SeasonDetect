import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position), //Success callback gets us a position object
        (error) => console.log(error) //failure callback gives us an error object
    );

return <div>Latitude:</div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);