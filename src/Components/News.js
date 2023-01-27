import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Button from 'react-bootstrap/esm/Button';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {


static defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}

static propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

  articles = []

  constructor(props) {
    super(props)

    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
     totalResults: null
    }
  }

  async updateNews(pageNo){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=9f784fe42c7340949a40889c5a0e9672&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({loading: true})
  try {
    
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading: false})

     console.log(parsedData.totalResults);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults})
  } catch (error) {
    window.alert("Something went wrong")
    
  }

  
console.log(this.state.page);
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
    this.setState({page: this.state.page - 1});
    this.updateNews();
  }

  nextClick = async()=>{
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
    this.setState({page: this.state.page + 1});
    this.updateNews();
  }


//   )
// }

render() {
  return (
    <div className='container center' >
      <h2 className='text-center' style={{margin: '20px 0px'}}>News Monkey - {this.props.heading}</h2>
    {this.state.loading && <Spinner/>}
      <div className="row my-3 ">

        {!this.state.loading && this.state.articles.map((element) => {
          return <div className="col-md-4" key={element.url}>
            <Newsitem title={element.title ? element.title.slice(0, 45)+"..." : ""} description={element.description ? element.description.slice(0, 88)+"..." : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://www.shutterstock.com/shutterstock/photos/1204164946/display_1500/stock-photo-online-news-in-mobile-phone-close-up-of-smartphone-screen-man-reading-articles-in-application-1204164946.jpg"} newsUrl={element.url} author={element.author?element.author:"Unknown"} date= {element.publishedAt} source={element.source.name} />
          </div>
        })}

        <div className="container d-flex justify-content-between my-5">
          <Button
            disabled={this.state.page <= 1}
            onClick={this.prevClick}
            variant="primary"
            className="">&larr; Previous</Button>
          <Button
            disabled={this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize)}
            onClick={this.nextClick}
            variant="primary">Next &rarr;</Button>
        </div>



      </div>


    </div>
  )
}
}

export default News