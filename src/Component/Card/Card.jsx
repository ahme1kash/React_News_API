import React from "react";
import "./Card.css";
const Card = ({ news_data }) => {
  return (
    <>
      <div className="card-container">
        {news_data?.map((item) => {
          if (!item.image) {
            return null;
          }
          return (
            <div className="card">
              <img src={item.image} />
              <div className="card-content" key={item.url}>
                <a className="card-title"> {item.title}</a>
                <p> {item.description.slice(0, 200)}...</p>

                <a href={`${item.url}`}>
                  <button className="read-more">Read More</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
