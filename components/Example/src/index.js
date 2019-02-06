import React from "react";
import "./styles.scss";

import image from "./media/logo.png";

const Boom = () => {
  return (
    <div className="media">
      <img src={image} height="64px" className="mr-3" alt="..." />
      <div className="media-body">
        <h5 className="mt-0">Media heading</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
        Donec lacinia congue felis in faucibus.
      </div>
    </div>
  );
};

export default Boom;
