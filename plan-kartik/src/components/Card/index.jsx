import React, { useState } from "react";

const Card = ({ id, info, name, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  /**
   * Taking only 200 character from (info)
   */
  const description = readMore ? info : `${info.substring(0, 200)}...`;

  return (
    <div className="card">
      <img src={image} alt={`${id} pic`} className="image" />
      <div className="tour-details">
        <h4 className="tour-price">₹ {price}</h4>
        <h4 className="tour-name">{name}</h4>
      </div>
      <div className="description">
        {description}{" "}
        <span className="read-more" onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "read more"}
        </span>
      </div>
      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
};

export default Card;
