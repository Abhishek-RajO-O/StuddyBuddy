import React from 'react'

const Card = (
    title,//string
    discription,//string
    catogory,//string
    author,//string
    rating,//string
    stars,//int
    link,//string
    reviewCount,//int
    comment,//string
    comentBy//string
) => {
  return (
    <div>
      <h3>{title}</h3>
      <details>{discription}</details>
      
    </div>
  )
}

export default Card
