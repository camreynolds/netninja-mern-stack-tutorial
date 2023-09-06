import {useState} from "react"
import useWorkoutContext from "../hooks/useWorkoutContext"

const WorkoutForm = ()=>{
  const [title, setTitle] = useState("")
  const [load, setLoad] = useState("")
  const [reps, setReps] = useState("")
  const [error, setError] = useState(null)
  const { dispatch} = useWorkoutContext()

  const handleSubmit = async(e) =>{
    e.preventDefault()

    const response = await fetch("/api/workouts",{
      method: "POST",
      body: JSON.stringify({title,load,reps}),
      headers:{
        "Content-Type":"application/json"
      }
    })

    const json = await response.json()

    if(!response.ok){
      setError(json.error)
    }

    if(response.ok){
      setError(null)
      setTitle("")
      setLoad("")
      setReps("")
      dispatch({type: "CREATE_WORKOUT", payload: json})
    }

  }

  return(
    <form className="create" onSubmit={handleSubmit}>

      <label>Exersize title:</label>
      <input 
        type="text"
        onChange={ e => setTitle(e.target.value)}
        value={title}
      />

      <label>Load (in Kg):</label>
      <input
        type="number"
        onChange={ e => setLoad(e.target.value)}
        value={load}
      />

      <label>Reps:</label>
      <input
        type="number"
        onChange={ e => setReps(e.target.value)}
        value={reps}
      />

      <button>add workout</button>
      {error && <div className="error">{error}</div> }

    </form>
  )
}

export default WorkoutForm