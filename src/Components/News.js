import React, { Component } from "react";
import Newsitem from "./Newsitem";
// import Button from "react-bootstrap/esm/Button";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [];

  capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);

    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capFirstLetter(
      this.props.category
    )} - News-Monkey The News App`;
  }

  async updateNews(pageNo) {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({ loading: false });
    try {
      let data = await fetch(url);
      this.props.setProgress(30);
      let parsedData = await data.json();
      this.setState({ loading: false });

      console.log(parsedData.totalResults);
      this.props.setProgress(70);
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
      });
      this.props.setProgress(100);
    } catch (error) {
      window.alert("Something went wrong");
    }

   
  }

  async componentDidMount() {
    this.updateNews();
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=9f784fe42c7340949a40889c5a0e9672&page=1&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    //       this.setState({loading: true})
    //     try {

    //       let data = await fetch(url);
    //       let parsedData = await data.json();
    //       this.setState({loading: false})

    //        console.log(parsedData.totalResults);
    //       this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults})
    //     } catch (error) {
    //       window.alert("Something went wrong")

    //     }

    //     // this.setState({ articles: parsedData.articles, totalResults: this.parsedData.totalResults})
    // console.log(this.state.page);
  }

  prevClick = async () => {
    // console.log(this.state.page);
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=9f784fe42c7340949a40889c5a0e9672&page=${this.state.page-1}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({loading: false})
    // // console.log(parsedData);
    // this.setState({ articles: parsedData.articles,totalResults: parsedData.totalResults })
    // this.setState(
    //   {
    //     page: this.state.page-1,

    //   }
    // )
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  nextClick = async () => {
    // if(this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize))
    // {}
    // else{
    // console.log(this.state.page);
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=9f784fe42c7340949a40889c5a0e9672&page=${this.state.page+1}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({loading: false})
    // // console.log(parsedData);
    // this.setState({ articles: parsedData.articles,totalResults: parsedData.totalResults })
    // this.setState(
    //   {
    //     page: this.state.page+1,
    //   }
    // )
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  //   )
  // }

  fetchMoreData =  async () => {

this.setState({page: this.state.page+1})
const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
this.setState({ loading: false });
try {
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({ loading: false });

  console.log(parsedData.totalResults);
  this.setState({
    articles: this.state.articles.concat(parsedData.articles),
    totalResults: parsedData.totalResults,
  });
  console.log("article length:"+this.state.articles.length)
  console.log("Total results"+this.state.totalResults)
} catch (error) {
  window.alert("Something went wrong");
}

console.log(this.state.page);
  };

  render() {
    return (
      <div className="container center">
        <h2 className="text-center" style={{ margin: "20px 0px" }}>
          News Monkey - {this.props.heading}
        </h2>
        {this.state.loading && <Spinner/>}
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={<Spinner/>}
          scrollableTarget="scrollableDiv"
        >
        <div className="container">
          <div className="row my-3 ">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={
                      element.title ? element.title.slice(0, 45) + "..." : ""
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 88) + "..."
                        : ""
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://www.shutterstock.com/shutterstock/photos/1204164946/display_1500/stock-photo-online-news-in-mobile-phone-close-up-of-smartphone-screen-man-reading-articles-in-application-1204164946.jpg"
                    }
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
       
        {/* <div className="container d-flex justify-content-between my-5">
          <Button
            disabled={this.state.page <= 1}
            onClick={this.prevClick}
            variant="primary"
            className=""
          >
            &larr; Previous
          </Button>
          <Button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.nextClick}
            variant="primary"
          >
            Next &rarr;
          </Button>
        </div> */}
      </div>
    );
  }
}

export default News;
