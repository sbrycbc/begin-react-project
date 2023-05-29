import React from "react";
import PropTypes from 'prop-types';

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

/* const Card = (props) => {
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
}; */



//---function componenti class component e dönüstürüyoruz-->

class Card extends React.Component {
    render() {
        return(
        <div className="card w-100">
        <img src={this.props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{this.props.cardTitle}</h5>
        <p className="card-text">{this.props.cardText}</p>
        <p className="card-text"><small className="text-body-secondary">{this.props.updatedTime}</small></p>
        </div>
    </div>
        )
    };
};


Card.defaultProps = {
    cardTitle :"Default Card Title"

}

Card.propTypes = {
    cardText: PropTypes.string.isRequired
  };

export default Card;





