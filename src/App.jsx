import { useState } from 'react'
import './App.css'
import Blogs from './components/Bolgs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookMark, setBookMark] = useState([])
  const [readingCount,setReadingCount]=useState(0)
  
  const handleBookMarked=(blog)=>{
    setBookMark([...bookMark,blog])
  }

  //  console.log(bookMark)

  const handleAsReadingTime=(time,id)=>{
      //  console.log(time,id)
     const newCount = readingCount + time
     setReadingCount(newCount)
     handleRemoveFromBookMark(id)
  }

  const handleRemoveFromBookMark=(id)=>{
      // console.log(id)
      const remainingBookMark = bookMark.filter((mark)=>mark.id !== id)
      setBookMark(remainingBookMark)
  }

  return (
    <>
     <Navbar></Navbar>
    
     <div className='main-container flex text-center'>
      <div className='left-container w-[70%]'>
      <Blogs 
      handleBookMarked={handleBookMarked}
      handleAsReadingTime={handleAsReadingTime}
      ></Blogs>
      </div>

      <div className='right-container w-[30%]'>
         <h1>Reading Time: {readingCount}</h1>
         <h1>BookMarked count: {bookMark.length}</h1>
         {
          bookMark.map((marked)=><p>{marked.title}</p>)
         }
      </div>

     </div>
    </>
  )
}

export default App
