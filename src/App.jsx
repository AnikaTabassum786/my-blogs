import { useState } from 'react'
import './App.css'
import Blogs from './components/Bolgs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookMark, setBookMark] = useState([])
  
  const handleBookMarked=(blog)=>{
    setBookMark([...bookMark,blog])
  }

  console.log(bookMark)

  return (
    <>
     <Navbar></Navbar>
    
     <div className='main-container flex text-center'>
      <div className='left-container w-[70%]'>
      <Blogs handleBookMarked={handleBookMarked}></Blogs>
      </div>

      <div className='right-container w-[30%]'>
         <h1>Reading Time: 0</h1>
         <h1>BookMarked count:0</h1>
         {
          bookMark.map((marked)=><p>{marked.title}</p>)
         }
      </div>

     </div>
    </>
  )
}

export default App
