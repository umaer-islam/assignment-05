import { useEffect, useState } from "react"
import type { Technology } from "../types/technology"
import TechnologyCard from "./TechnologyCard"
import StackSidebar from "./StackSidebar"

function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Technology[]>([])

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p>Loading technologies...</p>
  }

  return (
    <section className="technologies" id="technologies">
      <div className="technologies-heading">
        <h2>
          Explore the <span>Technologies</span>
        </h2>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="technologies-layout">
        <div className="technology-grid">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            />
          ))}
        </div>

        <StackSidebar count={selected.length} />

      </div>

    </section>
  )
}

export default Technologies