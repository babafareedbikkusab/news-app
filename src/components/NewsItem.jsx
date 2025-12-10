import React from "react";

const NewsItem = (props) => {
  return (
    <div>
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%" }}
          >
            {props.source}
          </span>
          <img src={props.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}.. </h5>
            <p className="card-text">{props.description}</p>
            <a
              href={props.newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
            <p className="card-text">
              <small className="text-muted">
                Updated by {props.author ? props.author : "Unknown"} on{" "}
                {new Date(props.date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
