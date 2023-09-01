import {createContext, useReducer} from "react"

export const AuthContext = createContext()

export const authContextReducer = (state,action)=>{
  switch(action.type){
    case "SIGNUP_LOGIN":  
      return{
        user: action.payload
      }
      
    case "LOGOUT":
      return{
        user: null
      }

    default: return state
  }
}

export const AuthContextProvider = ({children})=>{
  const [state, dispatch] = useReducer(authContextReducer,{
    user: null
  })

  return(
    <AuthContext.Provider value={{...state,dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}