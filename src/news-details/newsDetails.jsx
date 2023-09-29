import React, {useEffect} from "react";
import {connect} from "react-redux";
import {setSelectedNews} from "../store/newsAction";
import "./newsDetails.scss";
import newsData from "../news.json";

const NewsDetails = ({selectedNews, setSelectedNews}) => {
  const selectedNewsId = localStorage.getItem("selectedNewsId");
  useEffect(() => {
    const matchingNews = newsData.find((news) => news.id === selectedNewsId);

    if (matchingNews) {
      setSelectedNews(matchingNews);
    }
  });
  if (!selectedNews) {
    return (
      <div className="description-container">
        <div className="description-glavni">
          <h2>{setSelectedNews.title}</h2>
          <img src={setSelectedNews.imagePath} alt={setSelectedNews.title} />
          <p>{setSelectedNews.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="description-container">
      <div className="description-glavni">
        <h2>{selectedNews.title}</h2>
        <img src={selectedNews.imagePath} alt={selectedNews.title} />
        <p>{selectedNews.description}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedNews: state.news.selectedNews,
    newsData: state.news.newsData,
  };
};

export default connect(mapStateToProps, {
  setSelectedNews,
})(NewsDetails);
