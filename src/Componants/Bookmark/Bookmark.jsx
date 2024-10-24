import PropTypes from "prop-types"

export default function Bookmark({bookmark}) {
    const {title} = bookmark;
    
  return (
    <div className="rounded-lg bg-slate-200 p-4 my-2">
        <h2 className="Text-2xl font-bold">Blog Title: {title}</h2>
    </div>
  )
}
Bookmark.PropTypes={
// Bookmark: PropTypes.object
}
