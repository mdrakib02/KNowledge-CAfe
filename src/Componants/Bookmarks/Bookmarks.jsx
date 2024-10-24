import Bookmark from "../Bookmark/Bookmark";

export default function Bookmarks({ bookmark, readingTime }) {
  console.log(readingTime)
  return (
    <div className="w-1/3">
      <div>
        <h2 className="Text-2xl font-bold bg-indigo-300 p-4 rounded-lg mb-4">Spent Time On Read:{readingTime}</h2>
      </div>
      <div className="text-left ml-4 bg-slate-100">
        <h4 className="text-2xl font-bold bg-slate-200 p-4 rounded-md">
          Book Marks:
        </h4>
        {bookmark.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
}
