import { useState } from "react";
import useAuthContext from "./useAuthContext"

export const useSignup = () =>{
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)
  const {dispatch} = useAuthContext()
  
  const signup = async (email,password) =>{
    setError(null)
    setIsLoading(true)
    
    const response = await fetch("/api/users/signup",{
        method: "POST",
        body: JSON.stringify({email,password}),
        headers:{
          "Content-Type": "application/json"
        }
      })
  
    const json = await response.json()
  
    if(!response.ok){
      setError(json.error)
      setIsLoading(false)
    }
    
    if(response.ok){
      setIsLoading(false)
      localStorage.setItem("user", JSON.stringify(json))
      dispatch({type: "LOGIN", payload: json})
    }
  }

  return {signup, isLoading, error}
}