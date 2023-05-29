import React from "react";

const Collapse = (props) => {
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
};

export default Collapse;

