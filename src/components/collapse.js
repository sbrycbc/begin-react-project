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
      showContent: true
    };
  }
  render() {
    return (
      <div>
        <a className ='btn btn-primary w-100 mb-2 mt-3'>
          Link with href</a>

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





//State---->> O an ki durumdaki bilgilerin ne oldugunu verir..
//props---->> degistirilemez veriler icin kullanilir...
//state---->> degistirilebilir veriler icin kullanmaliyiz....

export default Collapse;
