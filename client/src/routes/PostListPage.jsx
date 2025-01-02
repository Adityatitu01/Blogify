import React, { useState } from 'react'
import PostList from "../Components/PostList"
import SideMenu from '../Components/SideMenu'

const PostListPage = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <h1 className='mb-8 text-2xl'>Development Blog</h1>

      {/* Toggle button only visible on small screens */}
      <button 
        onClick={() => setOpen((prev) => !prev)} 
        className='bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden'
      >
        {open ? "Close" : "Filter or Search"}
      </button>

      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="">
          <PostList />
        </div>
        
        {/* Show SideMenu based on state, always visible on medium+ screens */}
        <div className={`${open ? "block" : "hidden"} md:block `}>
          <SideMenu />
        </div>
      </div>
    </div>
  )
}

export default PostListPage;