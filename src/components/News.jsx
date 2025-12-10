import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  //document.title = News Monkey - ${props.category};

  const fetchMoreData = async () => {
    setLoading(true);
    console.log('Fetcg more ' + articles)
    let dataUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(dataUrl);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    console.log(articles)
    setLoading(false);
  };

  const updateNews = async () => {
    let dataUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(dataUrl);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setLoading(false);
    setTotalResults(parsedData.totalResults);
  };

  const handlePreviousClick = async () => {
    setPage(page - 1);
    updateNews();
  };

  const handleNextClick = async () => {
    setPage(page + 1);
    updateNews();
  };

  useEffect(() => {
    updateNews();
  }, []);
  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        NewsMonkey - Top {props.category} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
         <button
           disabled={page <= 1}
           type="button"
           onClick={handlePreviousClick}
           className="btn btn-dark"
         >
           &larr; Previous
         </button>
         <button
           disabled={
             page + 1 >
             Math.ceil(totalArticles / props.pageSize)
           }
           type="button"
           onClick={this.handleNextClick}
           className="btn btn-dark"
         >
           Next &rarr;
         </button>
       </div> */}
    </>
  );
};

News.defaultProps = {
  category: "business",
  pageSize: 8,
  country: "us",
};

News.propTypes = {
  category: PropTypes.string,
  pageSize: PropTypes.number,
  country: PropTypes.string,
  apiKey: PropTypes.string.isRequired, 
};

export default News;