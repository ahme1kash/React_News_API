import React, { useState, useEffect } from "react";
import Card from "../Card/Card.jsx";
import "./NewsApp.css";
const NewsApp = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("India");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchClick = () => {
    fetchNews();
  };
  const handleChipClick = (val) => {
    setSearch(val);
    fetchNews();
  };

  const fetchNews = async () => {
    const key = import.meta.env.VITE_NEWSAPI_KEY.trim();
    const respone = await fetch(
      `https://gnews.io/api/v4/search?q=${search}&apikey=${key}&country=in&max=9&lang=en`
    );
    const data = await respone.json();
    setNews(data.articles);
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div className="container">
      <nav>
        <div>
          <h1>Current News</h1>
        </div>
        <ul>
          <a>All News</a>
          <a>Trending</a>
        </ul>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search News Here"
            onChange={handleInput}
          />
          <button onClick={handleSearchClick}>Search</button>
        </div>
      </nav>

      <div className="head">Daily News Feed</div>
      <div className="category-btn">
        <button
          onClick={(e) => {
            handleChipClick(e.target.innerText);
          }}
        >
          Politics
        </button>
        <button
          onClick={(e) => {
            handleChipClick(e.target.innerText);
          }}
        >
          World Affairs
        </button>
        <button
          onClick={(e) => {
            handleChipClick(e.target.innerText);
          }}
        >
          Sports
        </button>
        <button
          onClick={(e) => {
            handleChipClick(e.target.innerText);
          }}
        >
          Mobile
        </button>
        <button
          onClick={(e) => {
            handleChipClick(e.target.innerText);
          }}
        >
          Gadgets
        </button>
        <button
          onClick={(e) => {
            handleChipClick(e.target.innerText);
          }}
        >
          Business
        </button>
        <button
          onClick={(e) => {
            handleChipClick(e.target.innerText);
          }}
        >
          Cricket
        </button>
        <button
          onClick={(e) => {
            handleChipClick(e.target.innerText);
          }}
        >
          Health
        </button>
        <button
          onClick={(e) => {
            handleChipClick(e.target.innerText);
          }}
        >
          Food
        </button>
      </div>

      <div>
        <Card news_data={news} />
      </div>
      <p className="footer"> All Rights Reserved 2024.</p>
    </div>
  );
};

export default NewsApp;
