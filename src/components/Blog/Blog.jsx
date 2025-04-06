import React from 'react';

const Blog = ({blog}) => {
    // const {id,title,cover} = blog
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">mark as read</button>
    </div>
  </div>
</div>
        </>
    );
};

export default Blog;