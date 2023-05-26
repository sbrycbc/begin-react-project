import React from 'react';
import ReactDOM from 'react-dom';

//-------------- Erste Unterricht------------//

/* function App(){
    return <h1>Hallo!! My name is SbryCbc</h1>;
}
  */
/* class App2 extends React.Component {
    render () {
        return <h1>Hallo!! My name is SbryCbc</h1>;
    }
} */


//-------------- Zweite Unterricht------------//

//JSK

//const names = [ "Mahir", "Ulas", "Gölge"]

/* function App () {
    return(
        <div>
            {names.map(name =>(<h1>{name}</h1>))}
        </div>
    );      
} */

function App (){
    //const buttonValue = "My Button"
    const str1 = "Click";
    const str2 = "-Me!!";
    return(
        <div>
            <button  tabIndex="3" className='jskCLASS' type='button' style={{padding:'10px', color: 'white', backgroundColor: 'blue', border:'2px solid yellow'}}>{str1.concat(str2)}</button>
        </div>
    )
}



















ReactDOM.render(
    <App />,
    document.getElementById('root')
    //document.querySelector("#root")   
);