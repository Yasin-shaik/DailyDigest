import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Admin(props) {
  const navigate = useNavigate();
  const getNews = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          q: "News",
          apiKey: "69ef62ff3a984670af5cb56871ee771e",
        },
      });
      props.setAdminNews(response.data.articles);
      navigate("/admin/newsPage");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <button onClick={getNews} type="button" className="btn btn-primary">
        Get news for server
      </button>
    </div>
  );
}
