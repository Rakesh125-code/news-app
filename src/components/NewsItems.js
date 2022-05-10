import React, { Component } from 'react';

export default class NewsItems extends Component {
  render() {
      let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
    <div className='my-1 mx-1 py-1 w-cardWidthMobile sm:w-72 sm:my-2 sm:mx-1 rounded-sm bg-slate-100'>
        <div className='h-30 px-1 flex justify-center'>
        <img className='h-fit mb-1 rounded-sm' src={!imageUrl?"https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?s=612x612":imageUrl} alt="" />
        </div>
        <div className='text-white text-xs mx-1 py-1 px-3 bg-red-500 rounded-sm text-center'>{source}</div>
        <div className='rounded-sm  sm:w-72 bg-slate-100 px-1 py-1'>
            <h5 className='px-1 pb-1 text-lg text-slate-500'>{title}</h5>
            <p className='px-2 py-1 text-xs text-slate-600'>{description}</p>
            <div className='mx-2 my-1 text-slate-400 text-xs'>By {!author?"Unknown":author} on {new Date(date).toUTCString()}</div>
            <div className='h-0.5 bg-slate-100'></div>
            <div className='my-2 flex justify-between'>
               <a className='mx-2 text-sm px-2 py-1 rounded-sm bg-slate-600 text-slate-50 hover:bg-slate-500 hover:cursor-pointer' target="_blank" href={newsUrl}>Read more</a>
                {/* <div className='text-white text-xs mx-2 py-1 px-3 bg-red-500 rounded-full border-2'>{source}</div> */}
            </div>
        </div>
        </div>);
  }
}
