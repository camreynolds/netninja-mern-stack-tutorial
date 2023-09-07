import useAuthContext from "./useAuthContext"
import useWorkoutContext from "./useWorkoutContext"

export const useLogout = () =>{
  const {dispatch} = useAuthContext()
  const {dispatch: workoutDispatch} = useWorkoutContext()

  const logout = () =>{
    localStorage.removeItem("user")
    workoutDispatch({type: "GET_WORKOUTS", payload: null})
    dispatch({type: "USER_LOGOUT"})
  }

  return {logout}
}