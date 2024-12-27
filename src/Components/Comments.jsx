import React from 'react';
import Comment from './Comment';
const Comments = () => {
  return (
    <div className='flex flex-col gap-8 mt-4 lg:w-3/5'>
      <h1 className='text-xl text-gray-500 underline'>Comments</h1>
      <div className="flex item-center justify-between gap-8 w-full">
        <textarea 
          className='w-full rounded-xl p-4 transition-all duration-300 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300' 
          placeholder='Write a comment...'
        />
        <button 
          className='bg-blue-800 hover:bg-blue-700 active:scale-95 transition-all px-6 py-4 text-white font-medium rounded-xl shadow-lg self-center'>
          Send
        </button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}

export default Comments;
