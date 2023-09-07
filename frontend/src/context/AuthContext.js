import { createContext, useReducer, useEffect } from "react"

export const AuthContext = createContext()

export const authContextReducer = (state,action)=>{
  switch(action.type){
    case "SIGNUP_LOGIN":
      return{
        user: action.payload
      }

    case "USER_LOGOUT":
      return{
        user: null
      }

    default:
      return state
  }
}

export const AuthContextProvider = ({children})=>{
  const [state, dispatch] = useReducer(authContextReducer, {
    user: null
  })

  useEffect( () =>{
    const user = JSON.parse(localStorage.getItem("user"))

    if(user){
      dispatch({type: "SIGNUP_LOGIN", payload:user})
    }
  },[])

  console.log("Auth Context", state);
  
  return(
    <AuthContext.Provider value={{...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}