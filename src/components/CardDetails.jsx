import React from 'react'
import { useParams } from 'react-router-dom'
import getData from "../hooks/getData"

const CardDetails = () => {

    const { id } = useParams();
    const { data, loading, error } = getData(`/products/${id}`);
    console.log(data);

    
    const { name, price } = data
    

  return (
    <div>
        <h2>{price}</h2>
        <h2>{name}</h2>
    

    </div>
  )
}

export default CardDetails