import { useEffect, useState } from "react"
import type { Technology } from "../types/technology"
import TechnologyCard from "./TechnologyCard"
import StackSidebar from "./StackSidebar"
import { toast } from "react-toastify"


function Technologies(){

  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Technology[]>([])


  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data)
        setLoading(false)
      })
  }, [])



  function handleAddToStack(technology: Technology){

    // check if already added
    const alreadyAdded = selected.some((item) => item.id === technology.id)

    if(alreadyAdded){
      toast.warning(`${technology.name} is already in your stack.`)
      return
    }

    setSelected([...selected, technology])
    toast.success(`${technology.name} added to your stack.`)
  }


  function handleRemoveFromStack(id: string){

    // find the tech first so we can show its name in toast
    const tech = selected.find((item) => item.id === id)

    setSelected(selected.filter((item) => item.id !== id))

    if(tech){
      toast.info(`${tech.name} removed from your stack.`)
    }
  }


  function handleRemoveAll(){

    // dont show toast if stack is empty
    if(selected.length === 0){
      return
    }

    setSelected([])
    toast.info("All technologies removed from your stack.")
  }


  if(loading){
    return <p>Loading technologies...</p>
  }


  return(
    <section className="technologies" id="technologies">

      <div className="technologies-heading">
        <h2>Explore the <span>Technologies</span></h2>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="technologies-layout">

        <div className="technology-grid">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAdd={handleAddToStack}
              isAdded={selected.some((item) => item.id === technology.id)}
            />
          ))}
        </div>

        <StackSidebar
          count={selected.length}
          selected={selected}
          onRemove={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />

      </div>

    </section>
  )
}

export default Technologies