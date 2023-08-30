import {useState} from "react"
import UseWorkoutContext from "../hooks/UseWorkoutContext"

const WorkoutForm = ()=>{
  const [title, setTitle] = useState("")
  const [load, setLoad] = useState("")
  const [reps, setReps] = useState("")
  const [error, setError] = useState(null)
  const [isEmpty, setIsEmpty] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  const {dispatch} = UseWorkoutContext()

  const handleSubmit = async e =>{
    e.preventDefault()
    // setIsLoading(true)
    setError(null)

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
      setIsEmpty(json.isEmpty)
      // setIsLoading(false)
    }

    if(response.ok){
      setError(null)
      setIsEmpty([])
      // setIsLoading(false)
      setTitle("")
      setLoad("")
      setReps("")
      console.log("Workout added: ",json)
      dispatch({type: "CREATE_WORKOUT", payload:json})
    }
  }

  return(
    <form className="create" onSubmit={handleSubmit}>

      <label>Exersize title:</label>
      <input 
        type="text" 
        onChange={ e => setTitle(e.target.value)} 
        value={title} 
        className={isEmpty.includes("title") ? "error" : ""}
      />

      <label>Load (in Kg):</label>
      <input 
        type="number" 
        onChange={ e => setLoad(e.target.value)} 
        value={load} 
        className={isEmpty.includes("load") ? "error" : ""}
      />

      <label>Reps:</label>
      <input 
        type="number" 
        onChange={ e => setReps(e.target.value)} 
        value={reps} 
        className={isEmpty.includes("reps") ? "error" : ""}
      />

      <button>add workout</button>
      {error && <div className="error">{error}</div> }

    </form>
  )
}

export default WorkoutForm