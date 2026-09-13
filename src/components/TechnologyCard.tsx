import type { Technology } from "../types/technology"

type Props = {
  technology: Technology
  onAdd: (technology: Technology) => void
  isAdded: boolean
}

function TechnologyCard({ technology, onAdd, isAdded }: Props){

  return(
    <div className="technology-card">

      <div className="card-header">
        <img src={technology.icon} alt={technology.name} />
        <span className="card-badge">{technology.badge}</span>
      </div>

      <h3>{technology.name}</h3>
      <p className="card-description">{technology.description}</p>

      <div className="card-divider"></div>

      <div className="card-info">
        <span className="card-category">{technology.category}</span>
        <span className="card-difficulty">{technology.difficulty}</span>
        <span className="card-rating">★ {technology.rating}</span>
      </div>

      <button
        className="card-button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  )
}

export default TechnologyCard