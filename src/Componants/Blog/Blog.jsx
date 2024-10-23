import PropTypes from "prop-types"



export default function Blog({blog}) {
    const {title, cover} =blog;
  return (
    <div>
        <h3>Blog Title: {title}</h3>
        <img src={cover} alt="" />
    </div>
  )
}
Blog.prototype={
    blog: PropTypes.object.isRequired
}
