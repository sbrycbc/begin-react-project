import React from "react";
import ReactDOM from "react-dom";

import Card from "./components/card";
import Collapse from "./components/collapse";

//-------------- Erste Unterricht------------//

/* function App(){
    return <h1>Hallo!! My name is SbryCbc</h1>;
}
  */
/* className App2 extends React.Component {
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

/* function App (){
    //const buttonValue = "My Button"
    const str1 = "Click";
    const str2 = "-Me!!";
    return(
        <div>
            <button  tabIndex="3" className='jskclassName' type='button' style={{padding:'10px', color: 'white', backgroundColor: 'blue', border:'2px solid yellow'}}>{str1.concat(str2)}</button>
        </div>
    )
} */

//-------------- Dritte Unterricht------------//

// Props ---> Componentlar arasi veri iletisimini saglar.

/* const App = () => {

    return (
             <div>
                <div className="card-group">

                    <Card cardTitle="Lebenstmittel"/>

                    <Card cardTitle="Sport-Lauf"/>

                    <Card cardTitle="Laufen-Verrückt"/>

                </div>
            </div>
    );
} */

//-------------- Vierte Unterricht------------//

//Child Props

const App = () => {
  return (
    <div className="container ">
      <div className="row ">
        <div className="card-group w-100 gap-5">

          <div className="col">
            <Collapse href="collapseExample">
              <Card
                //cardTitle="Lebenst-Mitteln"
                cardText="Lorem Ipsum Text 1"
                updatedTime=" Last Updated 1 min age"
                image="https://picsum.photos/id/42/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample">
              <Card
                cardTitle="Lauf-Verrückt"
                cardText="Lorem Ipsum Text 2"
                updatedTime=" Last Updated 2 min age"
                image="https://picsum.photos/id/156/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample">
              <Card
                cardTitle="Lauf-Verbindung"
                cardText="Lorem Ipsum Text 3"
                updatedTime=" Last Updated 3 min age"
                image="https://picsum.photos/id/27/200/300"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
  //document.querySelector("#root")
);
