
import './App.css'
import Header from './Componants/Header/Header'
import Blogs from './Componants/Blogs/Blogs'
import Bookmarks from './Componants/Bookmarks/Bookmarks'
function App() {


  return (
    <>
    <Header></Header>
     <main className='flex w-10/12 mx-auto mt-20 items-center'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </main>
    </>
  )
}

export default App
