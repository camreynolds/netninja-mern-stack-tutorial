// import {useState } from "react"
import { useEffect} from "react"
import useWorkoutContext from "../hooks/useWorkoutContext"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import useAuthContext from "../hooks/useAuthContext"

const Home = () =>{
  // const [workouts, setWorkouts] = useState([])
  const {workouts, dispatch} = useWorkoutContext()
  const {user} = useAuthContext()

  useEffect( ()=>{
    const fetchWorkouts = async () =>{
      const response = await fetch("/api/workouts",{
        headers:{
          "Authorization": `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if(response.ok){
        // setWorkouts(json)
        dispatch({type: "GET_WORKOUTS", payload: json})
      }
    }

    fetchWorkouts()
  },[dispatch,user])

  return(
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map( workout =>(
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home