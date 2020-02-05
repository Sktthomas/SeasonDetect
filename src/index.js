import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component { //Class component instead of functional
    render() {

        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position), //Success callback gets us a position object
            (error) => console.log(error) //failure callback gives us an error object
        );

        return <div>Latitude: </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);