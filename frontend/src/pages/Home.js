//import { useEffect, useState } from "react"
import { useEffect } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import useWorkoutContext from "../hooks/useWorkoutContext"
import useAuthContext from "../hooks/useAuthContext"

const Home = () =>{
  //const [workouts, setWorkouts] = useState(null)
  const {workouts, dispatch} = useWorkoutContext()
  const {user} = useAuthContext()


  useEffect( () =>{

    const fetchWorkout = async () =>{
      const response = await fetch("/api/workouts",{
        headers:{
          "Authorization": `Bearer ${user.token}`
        }
      })

      const json = await response.json()

      //console.log(json);

      if(response.ok){
        //setWorkouts(json)
        dispatch({type: "SET_WORKOUTS", payload: json})
      }
    }

    if(user){
      fetchWorkout()
    }

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