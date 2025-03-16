import React from "react";
import getData from "../hooks/getData";

const Brands = () => {
  const { data, loading, error } = getData("/brands/all");
  // console.log(data);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {data.map((brand, index) => {
        return (
          <div key={index}>
            <img src={`./src/assets/brands${brand.image}`} alt="" />
            <h2>Brand Name : {brand.name}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default Brands;
