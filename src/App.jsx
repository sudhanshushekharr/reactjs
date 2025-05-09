

// function App(){

//   return <div>
//     <h1>Hello</h1>
//     <h2>Not hello</h2>
//   </div>
// }


// export default App


//usestate

// import React, { useState } from 'react'

// const App = () => {
//   const [a, seta] = useState(0)
//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={()=>{seta(a+10)}}>increment</button>
//       <button onClick={()=>{seta(a-10)}}>decrement</button>
//     </div>
//   )
// }

// export default App


//tailwind css

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1 className='text-4xl bg-pink-500'>Hello guys</h1>

//     </div>
//   )
// }

// export default App



//form handling

// import React, { useState } from 'react'

// const App = () => {

//  const submitHandler=(e)=>{
//   e.preventDefault();
   
//   console.log("submiited");
//   setUsername("");
  
//  }
//    const [username, setUsername] = useState("")
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e);
//       }}>
//         <input
//         value={username}
//          onChange={(e)=>{
//           //console .log(e.target.value);
//           setUsername(e.target.value)
//          }}
//          className='px-4 py-3 text-xl m-5 rounded bg-amber-100' 
//          type="text"
//           />
//         <button className='px-4 py-3 text-xl m-5 rounded bg-red-500' type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App



//fragments and components
// import React from 'react'

// import NavBar from './components/NavBar'
// import Footer from './components/Footer'
// const App = () => {
//   return (
//   <>
//   <NavBar />
//   <Footer />
  
//   </>
//   )
// }

// export default App




// import React from 'react'
// import Card from './components/Card'
// const App = () => {

//   const data=[
//     {
//       "user": "Alice Johnson",
//       "age": 28,
//       "city": "New York",
//       "image": "https://randomuser.me/api/portraits/women/21.jpg"
//     },
//     {
//       "user": "Rahul Mehta",
//       "age": 32,
//       "city": "Mumbai",
//       "image": "https://randomuser.me/api/portraits/men/34.jpg"
//     },
//     {
//       "user": "Sophie Müller",
//       "age": 25,
//       "city": "Berlin",
//       "image": "https://randomuser.me/api/portraits/women/45.jpg"
//     },
//     {
//       "user": "Carlos Rivera",
//       "age": 40,
//       "city": "Mexico City",
//       "image": "https://randomuser.me/api/portraits/men/58.jpg"
//     },
//     {
//       "user": "Yuki Tanaka",
//       "age": 30,
//       "city": "Tokyo",
//       "image": "https://randomuser.me/api/portraits/women/61.jpg"
//     }
//   ]

//   return (
//    <div>  
//  <div className='py-6 px-6'>

// {data.map(function(elem,idx){
//   return <Card key={idx} username={elem.user} age={elem.age} city={elem.city} image={elem.image} />

// })}
 
//  </div>
   
    

  
//    </div>

 
//   )
// }

// export default App



// import axios from 'axios'
// import React, { useState } from 'react'
// import Card from './components/Card'

// const App = () => {

//   const [data, setData] = useState([])

//   const getData =async ()=>{
//   const response=await axios.get('https://picsum.photos/v2/list');
 
// setData(response.data)
  
//   console.log(data);
  
  
    
//   }


//   return (
//     <div className='py-10 px-10'>
//       <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl px-6 py-6 rounded active:scale-90'>Get Data</button>
//       <div className='p-5 mt-5 bg-gray-950 text-white '>
  
//           {data.map((elem, idx) => (
//   <Card key={idx} image={elem.download_url} author={elem.author} />
// ))}
      
        
//         </div>
//     </div>
//   )
// }

// export default App



// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Card from './components/Card'

// const App = () => {

//   const [data, setData] = useState([])

//   const getData =async ()=>{
//   const response=await axios.get('https://picsum.photos/v2/list');
 
// setData(response.data)
  
//   console.log(data);
  
  
    
//   }

//    useEffect(() => {
//      getData()
   
//    }, [])
   





//   return (
//     <div className='py-10 px-10'>
//       <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl px-6 py-6 rounded active:scale-90'>Get Data</button>
//       <div className='p-5 mt-5 bg-gray-950 text-white '>
  
//           {data.map((elem, idx) => (
//   <Card key={idx} image={elem.download_url} author={elem.author} />
// ))}
      
        
//         </div>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import About from './pages/About'
// import Home from './pages/Home'
// import Contacts from './pages/Contacts'
// import Product from './pages/Product'
// import Header from './components/Header'
// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Routes>
//         <Route path='/about' element={<About />}/>
//         <Route path='/' element={<Home />}/>
//         <Route path='/contacts' element={<Contacts />}/>
//         <Route path='/product' element={<Product />}/>
//      </Routes>
//     </div>
//   )
// }

// export default App



import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { DataContext } from './Context/UserContext'
import { useContext } from 'react'
const App = () => {

  const data=useContext(DataContext)
  console.log(data);
  
  return (
   <>
   this is  my app
   
   </>
  )
}

export default App
