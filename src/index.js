import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component { //Class component instead of functional component. 

    state = {lat: null, errorMessage: ''} //alternate way to using constructor. Initialises state

    renderContent() { //helper method that avoids us having conditionals in render(). This way futureproofs our project since we might have changes in parent return function

        //Conditional loading of Latitude, error message or a loading screen, depending on state of the component
        if( this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage} </div>
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        
        return ( <Spinner message="Waiting for user to accept location request"/>)
    }


    //this method runs when the component is mounted for the first time. It is not run when updating or rerendering. This is why we put the API call inside of it. That way the constructor also only does one thing: initialising our state
    componentDidMount(){
         //since this will only be called once when the component is initialized, we would be better off putting it here, rather than in the render, which gets called all the time as updates are made
         window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState( { lat: position.coords.latitude }),
            (error) => {this.setState( {errorMessage: error.message});
            }
        );
    }

    //React says: We have to define render(). If we don't we get an error. It is used to render object on screen. It is run every time state changes
    //render should be pretty pure and only return JSX. Not anything else.
    render() { //class has one method by default. Therefore we also needs to implement React.component. We are subclassing it into App clas

        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);