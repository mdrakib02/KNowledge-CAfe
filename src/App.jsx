
import './App.css'
import Header from './Componants/Header/Header'
import Blogs from './Componants/Blogs/Blogs'
import Bookmarks from './Componants/Bookmarks/Bookmarks'
import { useState } from 'react'


function App() {
const [bookmark, setBookmark] = useState([]);
const [readingTime, setReadingTime] = useState(0);


const handleBookmark = (blog) => {
  const newBookmark = [...bookmark, blog];
  setBookmark(newBookmark);
}

const handleReadMark = (id,time) =>{
  const newReadMarkTime = readingTime + time;
  setReadingTime(newReadMarkTime);
  const remainingBookMark = bookmark.filter(bookmark => bookmark.id !== id);
  setBookmark(remainingBookMark);
}

  return (
    <>
    <Header></Header>
     <main className='flex w-10/12 mx-auto mt-20 justify-center gap-x-6'>
     <Blogs handleBookmark={handleBookmark}
     handleReadMark={handleReadMark}
     >
      
     </Blogs>
     <Bookmarks bookmark={bookmark}
     readingTime={readingTime}
     >

     </Bookmarks>
     </main>
    </>
  )
}

export default App
