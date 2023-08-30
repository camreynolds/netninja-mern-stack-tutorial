import UseWorkoutContext from "../hooks/UseWorkoutContext"
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const WorkoutDetails = ({workout}) =>{
  const {dispatch} = UseWorkoutContext()

  const handleClick = async ()=>{
    const response = await fetch("/api/workouts/" + workout._id,{
      method: "DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })

    const json = await response.json()

    if(response.ok){
      dispatch({type: "DELETE_WORKOUT", payload: json})
    }
  }

  return(
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (in Kg):</strong> {workout.load}</p>
      <p><strong>Reps:</strong> {workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix: true})}</p>
      <span onClick={handleClick} className="material-symbols-outlined">delete</span>
    </div>
  )
}

export default WorkoutDetails