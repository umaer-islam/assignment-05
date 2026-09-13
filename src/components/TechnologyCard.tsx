import type { Technology } from "../types/technology"

type TechnologyCardProps = {
  technology: Technology
}

function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
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
      <button className="card-button">Add to Stack</button>

    </div>
  )
}
export default TechnologyCard