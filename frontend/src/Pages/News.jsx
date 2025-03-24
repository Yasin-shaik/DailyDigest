import React, { useEffect, useState } from "react";
import axios from "../api";
import NewsContainer from "../Components/NewsContainer";
export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [search, setsearch] = useState("");
  const [query, setquery] = useState("");
  const getNews = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          q: `${query || props.category}`,
          apiKey: "69ef62ff3a984670af5cb56871ee771e",
        },
      });
      setArticles(response.data.articles);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getNews();
  }, [query, props.category]);
  return (
    <div className="d-flex align-items-center justify-content-center m-5 p-2 mb-3">
      <div className="container text-center">
        <div className="row row-cols-3">
          {articles.map((article, index) => (
            <NewsContainer
              key={index}
              article={article}
              setCurrent={props.setCurrent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
