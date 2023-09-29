import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {setSelectedNews} from "../store/newsAction";
import "./news.scss";
import newsData from "../news.json";

const News = ({setSelectedNews}) => {
  const handleNewsClick = (news) => {
    setSelectedNews(news);
    localStorage.setItem("selectedNewsId", news.id);
  };

  return (
    <div className="news-container">
      <div className="news-glavni">
        {newsData.map((news, index) => (
          <div key={index} onClick={() => handleNewsClick(news)}>
            <Link className="news-link" to={`/news-details/${index}`}>
              <img
                src={news.imagePath}
                alt={news.title}
                style={{gridArea: "b"}}
              />
              <h2 style={{gridArea: "a"}}>{news.title}</h2>
              <p style={{gridArea: "c"}}>{news.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setSelectedNews,
};

export default connect(null, mapDispatchToProps)(News);
