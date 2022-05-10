import React, { Component } from "react";
import {
  Link
} from "react-router-dom";
export default class Navbar extends Component {
  handleHambClick=()=>{
    if(this.myRef.current.classList.contains("hidden")){
      this.myRef.current.classList.remove("hidden")
      this.myRef.current.classList.add("block")
    }
    else{
      this.myRef.current.classList.remove("block")
      this.myRef.current.classList.add("hidden")
    }
  }
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return (
      <>
        <div className="flex justify-between fixed inset-x-0 bg-slate-100">
          <div className="flex  h-16 bg-slate-100 text-slate-500 sm:h-14 py-4 px-3 text-lg lg:text-base">
            <h2 className="mr-2 hover:cursor-pointer"> NewsRog </h2>
            {/* <h2 className="text-slate-400 px-5 my-0.5 text-base sm:my-0 sm:text-sm sm:mt-0.5 hover:cursor-pointer ">
                          Home
                        </h2> */}
            <ul className="hidden lg:block text-slate-400 px-5 my-0.5 text-base sm:my-0 sm:text-sm sm:mt-0.5">
            <div className="flex">           
            <li className="mx-3  hover:cursor-pointer hover:text-slate-500"><Link to='/business'> Business</Link> </li> 
              <li className="mx-3  hover:cursor-pointer hover:text-slate-500 "><Link to='/entertainment'> Entertainment </Link></li>
               <li className="mx-3  hover:cursor-pointer hover:text-slate-500"><Link to='/general'> General </Link></li>
              <li className="mx-3  hover:cursor-pointer hover:text-slate-500"><Link to='/health'> Health </Link></li> 
              <li className="mx-3  hover:cursor-pointer hover:text-slate-500"><Link to='/science'> Science </Link></li>
              <li className="mx-3  hover:cursor-pointer hover:text-slate-500"><Link to='/sports'> Sports </Link></li>
              <li className="mx-3  hover:cursor-pointer hover:text-slate-500"><Link to='/technology'> Technology </Link></li>
            </div> 
            </ul>
          </div>
          <div></div>
          <div className=" flex justify-between shadow-inner shadow-slate-500 rounded-b-xl lg:rounded-b-none h-16 bg-slate-900 text-slate-500 text-sm sm:text-lg px-2 pt-5 sm:pt-4 py-4 sm:py-3">
            {/* <button
              disabled={this.props.page <= 1}
              onClick={this.props.handlePrev}
              className={`mb-2 mx-1 sm:mx-4 ${!(this.props.page <=1)?"hover:text-slate-400":"hover:text-slate-500"} `}
            >
              &#60;
            </button> */}
            <h2 className="mx-1 sm:mx-3">NewsRog - Top Headlines</h2>
            {/* <button
              disabled={
                this.props.page + 1 >
                Math.ceil(this.props.totalResults / this.props.pageSize)
              }
              onClick={this.props.handleNext2}
              className={`mb-2 mx-1 sm:mx-4 ${!(this.props.page + 1 >
                Math.ceil(this.props.totalResults / this.props.pageSize))?"hover:text-slate-400":"hover:text-slate-500"} `}
            >
              &#62;
            </button> */}
          </div>
          <div className="ml-10 lg:hidden"></div>
          <div onClick={this.handleHambClick} className="hover:cursor-pointer hover:space-y-2.5 hover:translate-y-0.5 hover:pt-4 bg-slate-100 h-16 space-y-2 pt-5 w-10 mx-2 block lg:hidden">
              <div className="w-8 h-0.5 bg-gray-600"> </div>
              <div className="w-8 h-0.5 bg-gray-600"> </div>
              <div className="w-8 h-0.5 bg-gray-600"> </div>
            </div>
        </div>
        <div className="h-16 bg-slate-100"></div>
        <div ref= {this.myRef} className="w-full bg-slate-100 h-24 fixed hidden lg:hidden">
        <ul className=" text-slate-400 px-2 py-1 text-sm">
            <div className=" text-center grid grid-cols-4 gap-4">           
              <li className="mx-3 my-2 hover:cursor-pointer hover:text-slate-500"><Link to='/business'> Business</Link> </li> 
              <li className="mx-3 my-2 hover:cursor-pointer hover:text-slate-500 "><Link to='/entertainment'> Entertainment </Link></li>
               <li className="mx-3 my-2 hover:cursor-pointer hover:text-slate-500"><Link to='/general'> General </Link></li>
              <li className="mx-3 my-2 hover:cursor-pointer hover:text-slate-500"><Link to='/health'> Health </Link></li> 
              <li className="mx-3 my-2 hover:cursor-pointer hover:text-slate-500"><Link to='/science'> Science </Link></li>
              <li className="mx-3 my-2 hover:cursor-pointer hover:text-slate-500"><Link to='/sports'> Sports </Link></li>
              <li className="mx-3 my-2 hover:cursor-pointer hover:text-slate-500"><Link to='/technology'> Technology </Link></li>
            </div> 
            </ul>
        </div>
      </>
    );
  }
}
