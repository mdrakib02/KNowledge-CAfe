import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

export default function Blogs({handleBookmark, handleReadMark}) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3">
      <h2 className="text-2xl font-bold">Blogs: {blogs.length}</h2>
      {
        blogs.map((blog ,idx) => <Blog 
          key={idx}
          blog={blog}
          handleBookmark={handleBookmark}
          handleReadMark={handleReadMark}
        ></Blog>)
      }
   
    </div>
  )
}

Blog.PropTypes ={
  handleBookmark: PropTypes.func,
  handleReadMark: PropTypes.func
}
