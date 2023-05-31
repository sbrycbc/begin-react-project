import React from "react";

/* const Collapse = (props) => {
  return (
    <div>
        <div>
      <a
        className="btn btn-primary w-100 mb-2 mt-3" data-bs-toggle="collapse" href={"#".concat(props.href)} role="button"
        aria-expanded="false"
        aria-controls="collapseExample">
        Link with href
      </a>

      <div className="collapse show" id={props.href}>
        {props.children}
      </div>
    </div>
    </div>
  );
}; */

class Collapse extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: false
    };

    /* this.showMore = ()=> {
       console.log(this)
    } */

    //this.showMore = this.showMore.bind(this)
    // Bind---->
  }

   /* showMore(){
    this.setState(
      //{showContent: true}
    )
  }  */

  showMore = () => {
    this.setState({showContent: !this.state.showContent})

  }


  render() {
    return (
      <div>
        <button className ="btn btn-primary w-100 mb-2 mt-3" onClick={this.showMore} >
          Link with href
          </button>

        {
            this.state.showContent ? (

            <div className="collapse show">
            {this.props.children}
            </div>
          ): null 
        }
        
      </div>
    );
  };
};





//State ----->> Indicates the current state of the data.
//Props ----->> Used for immutable data.
//State ----->> Should be used for mutable data.
//setState -->> We can use this method to modify state properties since we cannot modify them manually. 'Setstate kullandiktan sonra render() methodu tekrar calistirilir.'
// first constructor --> state initialization
// The render method executed for the first time.
// onClick event fired.
// setState updated the state object --> triggered render.
// The render method displays the updated JSX on the page.
export default Collapse;
