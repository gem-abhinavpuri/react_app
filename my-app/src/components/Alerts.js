import React from "react";

function Alerts(props) {
  const capitialize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "55px" }}>
      {props.alert && (
        <div>
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{capitialize(props.alert.type)}: </strong>
            {props.alert.msg}
          </div>
        </div>
      )}
    </div>
  );
}

export default Alerts;
