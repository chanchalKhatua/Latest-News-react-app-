import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Sipnner from "./Sipnner";
import propTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';



const Newscom = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const updateNews = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country
      }&category=${props.category}&apiKey=${props.apikey}&page=${page
      }&pageSize=${props.pageSize}`;
    setloading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    setarticles(parseData.articles);
    settotalResults(parseData.totalResults)
    setloading(false)
  } //comment for class based componet 
  // 1 constructor run 2 render run 3 componentDidmount
  // a life cycle method
  // vedio 38/39 use in function based compoment due to some restriction of claas based 
  //https://www.geeksforgeeks.org/reactjs-useeffect-hook/  
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}-News`;
    updateNews();
  }, [])


  const fetchMoreData = async () => {


    const url = `https://newsapi.org/v2/top-headlines?country=${props.country
      }&category=${props.category}&apiKey=${props.apikey}&page=${page + 1
      }&pageSize=${props.pageSize}`;
    setpage(page + 1)
    let data = await fetch(url);
    let parseData = await data.json();
    setarticles(articles.concat(parseData.articles))
    settotalResults(parseData.totalResults)

  }

  return (
    <>

      <h2 className="text-center"> Top {capitalizeFirstLetter(props.category)}  Headlines </h2>
      {loading && <Sipnner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
        hasMore={articles.length !== totalResults}
      // loader={<Sipnner />}
      // inverse={true}

      ><div className="container" >
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : ""}

                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
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



    </>
  );

}
Newscom.defaultProps = {
  country: "in",
  pageSize: "12",
  category: "general",
  // apikey: ProcessingInstruction.env.API_KEY_NEWS
  apikey: "8eed3b7af8834cf9bafe4faeabbbb9d1"
};
Newscom.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
  apikey: propTypes.string,
};
export default Newscom
