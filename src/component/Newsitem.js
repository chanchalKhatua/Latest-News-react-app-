
import noimage from "./noimage.jpg"

const Newsitem = (props) => {

  let { title, description, imageurl, newsurl, author, date, source } = props;
  return (
    <>
      <div className="container mx-3 my-3">
        <div className="card" >
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "85%", zIndex: "1" }}
          >
            {source}
          </span>

          <img
            src={
              !imageurl
                ? noimage
                : imageurl
            }
            className="card-img-top"
            alt="No Image Avaible"
          />

          <div
            className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author}on{" "}
                {new Date(date).toLocaleTimeString()}{" "}
                {new Date(date).toLocaleDateString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsitem