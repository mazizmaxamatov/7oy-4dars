import Link from "antd/es/typography/Link";
import React from "react";
import image from "/src/assets/image.png";

const Card = ({ name, price, id }) => {
  // console.log(name);

const totalPrice = price / 6

  return <div>
    <div className="p-4 sm:mb-0 mp-6">
      <Link to={`/card-detalist/${id}`}>
        <div className="rounded-lg h-64 pverflow-hidden">
          <img
            alt={name}
            className="objeect-cover object-center h-full w-full"
            src={image}
          />
        </div>
        <h2 className="text-xl font-medium title-font text-grey-900 mt-5">
          {name}
        </h2>
        <p className="text-base leading-relaxed mt-2">
          {price}
        </p>
        <p className="text-base leading-relaxed mt-2">
          {totalPrice.toFixed()}
        </p>
      </Link>
    </div>


  </div>;
};

export default Card;
