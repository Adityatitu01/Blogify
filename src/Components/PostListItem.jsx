import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = () => {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='flex flex-col xl:flex-row gap-8'>
      {/* image */}
      <div className='md:hidden xl:block xl:w-1/3'>
        <img src="postImg.jpeg" className='rounded-2xl object-cover' alt="" />
      </div>
      {/* details */}
      <div className="flex flex-col xl:w-2/3 gap-4">
        <Link to="/test" onClick={handleScrollTop} className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link to="#" className="text-blue-500">Aditya titu</Link>
          <span>on</span>
          <Link to="#" className="text-blue-500">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ex illo nesciunt modi natus ea velit! Sed nostrum reiciendis tenetur culpa magnam.</p>
        <Link to='/test' onClick={handleScrollTop} className='underline text-blue-800 text-sm'>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;

