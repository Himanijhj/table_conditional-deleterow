import React from "react";

function Butt(props) {
  const show = props.name === "Glenna Reichert";

  function handleClick() {
    props.removeData(props.id);
  }

  if (show) {
    return (
      <button className="button" onClick={handleClick}>
        Delete
      </button>
    );
  } else {
    return <div></div>;
  }
}

export default Butt;
