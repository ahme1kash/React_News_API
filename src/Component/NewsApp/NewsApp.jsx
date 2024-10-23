import React, { useState, useEffect } from "react";
import Card from "../Card/Card.jsx";
import newspic from "../pic/newspic.png";

import "./NewsApp.css";
const NewsApp = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("India");
  const [selectedValue, setSelectedValue] = useState("India");
  const handleChipClick = async (val) => {
    setSearch(val);
    await fetchNews(val);
  };
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchClick = async () => {
    await fetchNews(search);
  };
  const handleSelect = async (value) => {
    setSelectedValue(value);
    setSearch(value);
    fetchNews(value);
  };

  const fetchNews = async (search_val) => {
    let country_url,
      ind_url,
      response,
      flag = 0;

    console.log(search_val);
    const key = import.meta.env.VITE_NEWSAPI_KEY.trim();
    const country_arr = ["in", "pk", "ae", "us", "gb", "au"];
    if (country_arr.includes(search_val)) {
      console.log(search_val, "34");
      country_url = `https://gnews.io/api/v4/top-headlines?category=general&apikey=${key}&country=${search_val}&lang=en&max=9`;
      flag = 1;
    } else {
      ind_url = `https://gnews.io/api/v4/search?q=${search_val}&apikey=${key}&country=in&max=9&lang=en`;
    }
    if (flag == 1) {
      response = await fetch(country_url);
    } else {
      response = await fetch(ind_url);
    }
    console.log(flag, search_val);
    const data = await response.json();
    setNews(data.articles);
  };
  useEffect(() => {
    fetchNews(search);
  }, []);
  return (
    <div className="container">
      <nav>
        <div className="news-div">
          <img className="news-pic" src={newspic} alt="News Icon" />
          <h1>Todays News</h1>
        </div>
        <ul>
          <a>World</a>
          <a>Trending</a>
        </ul>
        <div className="select-container">
          <select
            className="select-tags"
            name="country"
            id="country"
            value={selectedValue}
            onChange={(e) => {
              handleSelect(e.target.value);
            }}
          >
            <option value="in">India</option>
            <option value="us">USA</option>
            <option value="gb">England</option>
            <option value="pk">Pakistan</option>
            <option value="au">Australia</option>
            {/* <option value="RU">Russia</option>
            <option value="cn">China</option> */}
          </select>
        </div>

        <div className="search-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search News Here"
              onChange={handleInput}
              className="search-box"
            />
            <button className="search-btn" onClick={handleSearchClick}>
              Search
            </button>
          </div>
        </div>
      </nav>

      <div className="head">
        <h3>Daily News Feed</h3>
      </div>
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
