import React from "react";
import { Link } from "react-router-dom";
export default function NewsContainer(props) {
  const article=props.article;
  return (
    <div>
      <div className="card mb-3" style={{ width: "18rem" }}>
        <img src={article.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <Link to='/newsPage' className="btn btn-primary">
            <button onClick={()=>{props.setCurrent(article)}}>Read more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
