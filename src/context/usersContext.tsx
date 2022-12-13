import { createContext, useState } from "react";
import React from 'react'


export const usersContext = createContext({});

export function All_users_context({children}:any) {
    const [users, setUsers] = useState([{name: 'wesley', email: "Wesley@gmail.com", id: 1}]);

  return (
    <usersContext.Provider value={{setUsers: setUsers, users: users}}>
      {children}
    </usersContext.Provider>
  )
}
