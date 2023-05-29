import React from "react";

//-------------- Dritte Unterricht------------//
// Props

/* const Card = (props) => {
    return (
    <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
    </div>
    );
}; */


//-------------- Vierte Unterricht------------//
//Child Props

const Card = (props) => {
    return (
    <div className="card w-100">
        <img src={props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardText}</p>
        <p className="card-text"><small className="text-body-secondary">{props.updatedTime}</small></p>
        </div>
    </div>
    );
};








export default Card;

function Welcome(props){
    return <h1>Hello, props.name</h1>
}

class Welcome extends React.Component {
    render(){
        return <h1>Hello, {this.props.name}</h1>
    };
};




