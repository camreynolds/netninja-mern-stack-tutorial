import useAuthContext from "./useAuthContext";
import useWorkoutContext from "./useWorkoutContext"

export const useLogout = ()=>{
  const {dispatch} = useAuthContext()
  const {dispatch: workoutDispatch} = useWorkoutContext()

  const logout = ()=>{
    dispatch({type: "LOGOUT"})
    localStorage.removeItem("user")
    workoutDispatch({type: "SET_WORKOUTS", payload: null})
  }

  return {logout}
}