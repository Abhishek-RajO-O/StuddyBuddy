import React from "react";

const Card = (props
//   title, //string
//   discription, //string
//   catogory, //string
//   author, //string
//   rating, //string
//   stars, //int
//   link, //string
//   reviewCount, //int
//   comment, //string
//   comentBy //string
) => {
  return (
    <div>
      <div>
        <div>
          <h3>{props.title}</h3>
          <p>{props.discription}</p>
          <div>
            <span>{props.catogory}</span>
            <span>{props.author}</span>
          </div>
        </div>
        <div>
          <div name="stars">{"⭐".repeat(props.stars)}</div>
          <div>{props.rating}</div>
        </div>
      </div>
      <hr />
      <div>
        <span><a href={props.link}>view Resources </a></span>
        <span>👍 {props.reviewCount} Helpful</span>
      </div>
      <hr />
      <h6>Recent reviews:</h6>
      <div>
        <span>{props.comment}</span>
        <span>{props.comentBy}</span>
      </div>
    </div>
  );
};

export default Card;
