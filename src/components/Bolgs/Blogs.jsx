import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookMarked,handleAsReadingTime}) => {

    const [blogs,setBlogs]= useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(response=>response.json())
        .then(data=>setBlogs(data))
    })

    // console.log(blogs)
    return (
        <div>
            {blogs.length}

            <div className='grid grid-cols-2'>
                {blogs.map((blog)=>{
                    return(
                        <Blog
                        blog={blog}
                        handleBookMarked={handleBookMarked}
                        handleAsReadingTime={handleAsReadingTime}
                        >
                        </Blog>
                    )
                })}
            </div>
        </div>
    );
};

export default Blogs;