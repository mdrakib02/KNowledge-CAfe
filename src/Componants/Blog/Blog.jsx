import PropTypes from "prop-types"
import { CiBookmark } from "react-icons/ci";


export default function Blog({blog, handleBookmark, handleReadMark}) {
    const {title, cover,author_img, reading_time, post_date, author, hashtag} =blog;
  return (
    <div className="md:">
       
        <img className="w-full object-cover h-96 rounded-md mt-8" src={cover} alt="" />
        <div className="flex justify-between items-center my-8">
          {/* Author */}
          <dib className="flex gap-x-4 items-center">
            <img className="w-14 h-14 rounded-full object-cover" src={author_img} alt="" />
            <div>
              <h4 className="text-xl font-bold">{author}</h4>
              <p className="text-sm text-gray-500">{post_date}</p>
            </div>
          </dib>
          {/* Bookmark */}
          <dib className="flex gap-x-2 items-center text-xl font-medium">
            <p>{reading_time} min read</p>
            <button onClick={()=>handleBookmark(blog)}>
            <CiBookmark></CiBookmark>
            </button>
          </dib>
        </div>
        {/* Title and hastag */}
        <h3 className="text-4xl font-bold">Blog Title: {title}</h3>
        <p className="text-blue-600 mt-6">
          {
            hashtag.map(tag => <span>{tag}</span>)
          }
        </p>
        <button onClick={()=>handleReadMark(reading_time)} className="text-bold text-blue-700">Read Mark</button>
    </div>
  )
}
Blog.PropTypes={
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    handleReadMark: PropTypes.func
}
