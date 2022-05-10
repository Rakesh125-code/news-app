import React, { Component } from "react";
import NewsItem from "./NewsItems";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'
export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    };
    document.title = `${this.capitalizeFirst(this.props.category)} - NewsRog`;
  }
  // async updateNews() {
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   this.setState({
  //     articles: parseData.articles,
  //     totalResults: parseData.totalResults,
  //     loading: false,
  //   });
  // }
  
  async componentDidMount() {
    this.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.setProgress(30);
    let parseData = await data.json();
    this.setProgress(70);
    //   console.log(parseData.articles);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.setProgress(100);
  }
  // handlePrev = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=${this.props.apiKey}&page=${
  //     this.state.page - 1
  //   }&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   //   console.log(parseData.articles);
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parseData.articles,
  //     loading: false,
  //   });
  //   // console.log("prev")
  //   // this.setState({page:this.state.page-1});
  //   // this.updateNews();
  // };
  // handleNext = async () => {
  //   if (
  //     !(
  //       this.state.page + 1 >
  //       Math.ceil(this.state.totalResults / this.props.pageSize)
  //     )
  //   ) {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //       this.props.country
  //     }&category=${
  //       this.props.category
  //     }&apiKey=${this.props.apiKey}&page=${
  //       this.state.page + 1
  //     }&pageSize=${this.props.pageSize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parseData = await data.json();
  //     //   console.log(parseData.articles);
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parseData.articles,
  //       loading: false,
  //     });
  //   }
  //   // console.log("next")
  //   // this.setState({page:this.state.page+1});
  //   // this.updateNews();
  // };
   fetchMoreData = async () => {
     
   
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parseData.articles),
        page:this.state.page+1
     
    });
  };
  state={
    progress:10
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Navbar
          totalResults={this.state.totalResults}
          handleNext2={this.handleNext}
          handlePrev={this.handlePrev}
          page={this.state.page}
          pageSize={this.props.pageSize}
        />
        {/* infinite scrolling */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="flex justify-evenly flex-wrap">
          {
            this.state.articles.map((element) => {
              return (
                <NewsItem
                  key={element.url}
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              );
            })}
        </div>
        </InfiniteScroll>

        <div className="py-0.5"></div>
        {/* simple code using next and prev */}
        {/* <div className="flex justify-evenly flex-wrap">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <NewsItem
                  key={element.url}
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              );
            })}
        </div> */}

        {this.state.loading && <Spinner />}
      </div>
    );
  }
}
