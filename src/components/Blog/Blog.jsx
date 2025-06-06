import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog,handleBookMarked,handleAsReadingTime}) => {
     const {hashtags} = blog
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">

    <div className='author flex gap-10 items-center'>
        <h3>{blog.author}</h3>
        <img className='w-16' src={blog.author_img} alt="" />
        <button onClick={()=>handleBookMarked(blog)}><FaBookmark  size={25}/></button>

    </div>

    <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    {
       hashtags.map((has)=><p>{has}</p>)
    }
    <div className="card-actions justify-end">
      <button onClick={()=>handleAsReadingTime(blog.reading_time, blog.id)} className="btn btn-primary">mark as read</button>
    </div>
  </div>
</div>
        </>
    );
};

export default Blog;