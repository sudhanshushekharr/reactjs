
// import React from 'react'

// const Card = (props) => {
//     console.log(props);
    
//   return (
//     <div>
//       <h1>Username is a {props.a} </h1>
//     </div>
//   )
// }

// export default Card



import React from 'react'

const Card = (props) => {
  return (
    <div className='mr-5 bg-slate-950 text-white inline-block  text-center rounded px-6 py-8'>
        <img className='ml-5 h-32 w-32 rounded-full mb-3' src={props.image} alt="" />
      <h1 className='text-2xl font-semibold mb-4'>{props.author} </h1>
     {/* // <h2>{props.city}, {props.age}</h2>
      //<button className='bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add Friend</button> */}
    </div>
  )
}

export default Card

