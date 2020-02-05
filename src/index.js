import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component { //Class component instead of functional component. 

    //The very first function called when an instance of the class is created. Therefore good when initializing state
    constructor(props) {
        super(props); //Since we're inheriting from React.Component, we have to set up the constructor code using the super() to first construct a React Component

        this.state = { lat: null } //state object. Will contain relevant data like our latitude. We initialise it as null since we don't know it yet. This is the only time we assign this.state using "="

        //since this will only be called once when the component is initialized, we would be better off putting it here, rather than in the render, which gets called all the time as updates are made
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState( { lat: position.coords.latitude }); //Sets state to position latitude USING SETSTATE
            }, //Success callback gets us a position object
            (error) => console.log(error) //failure callback gives us an error object
        );
    }

    //React says: We have to define render(). If we don't we get an error
    render() { //class has one method by default. Therefore we also needs to implement React.component. We are subclassing it into App class

        return <div>Latitude: {this.state.lat} </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);