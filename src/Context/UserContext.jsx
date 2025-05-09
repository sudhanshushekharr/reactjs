import React, { createContext } from 'react'

export const DataContext = createContext() 




const UserContext = ({children}) => {

      const userData={
        username:"Sarthak ",
        age:69,
        city:'Bhopal'
      }
  return (
    <div>
        <DataContext.Provider value={userData}>
        {children}
        </DataContext.Provider>
  
    </div>
  )
}

export default UserContext
