import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    // let url="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
    const err=useRouteError();
    const {status,statusText}=err;
  return (
    // <div><img src={url} className='w-screen h-screen object-cover' alt='Error Page'/></div>
    <h2>
        <h2>{status + " " + statusText}</h2>
    </h2>
  )
}

export default Error