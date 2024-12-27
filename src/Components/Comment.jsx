import React from 'react';

const Comment = () => {
  return (
    <div className='bg-slate-50 p-4 rounded-xl mb-3'>
        <div className="flex items-center gap-2">
            <img src="userImg.jpeg" className='w-10 h-10 rounded-full object-cover' alt="" />
            <span className='font-medium'>Aditya titu</span>
            <span className='text-sm text-gray-500'>2 days ago</span>
        </div>
      <div className="mt-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ad. Error sequi unde dignissimos, harum magnam reiciendis mollitia, eligendi magni in, minus saepe? Debitis, labore inventore totam dolorem itaque temporibus!
          </p>
      </div>
    </div>
  )
}

export default Comment;
