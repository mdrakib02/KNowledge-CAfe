import PropTypes from "prop-types"
import { CiBookmark } from "react-icons/ci";


export default function Blog({blog}) {
    const {title, cover,author_img, reading_time, post_date, author} =blog;
  return (
    <div className="md:">
       
        <img className="w-full object-cover h-96 rounded-md mb-8" src={cover} alt="" />
        <div className="flex justify-between items-center">
          <dib className="flex gap-x-9 items-center">
            <img className="w-14 h-14 rounded-full object-cover" src={author_img} alt="" />
            <div>
              <h4 className="text-xl font-bold">{author}</h4>
              <p className="text-sm text-gray-500">{post_date}</p>
            </div>
          </dib>
          <dib className="flex gap-x-2 items-center text-xl font-medium">
            <p>{reading_time} min read</p>
            <button>
            <CiBookmark></CiBookmark>
            </button>
          </dib>
        </div>

        <h3 className="text-4xl font-bold">Blog Title: {title}</h3>
    </div>
  )
}
Blog.prototype={
    blog: PropTypes.object.isRequired
}
