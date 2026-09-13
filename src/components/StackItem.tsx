import type { Technology } from "../types/technology"

type Props = {
  technology: Technology
  onRemove: (id: string) => void
}

function StackItem({ technology, onRemove }: Props){

  return(
    <div className="stack-item">
      <div className="stack-item-info">
        <img src={technology.icon} alt={technology.name} />
        <div>
          <p className="stack-item-name">{technology.name}</p>
          <p className="stack-item-category">{technology.category}</p>
        </div>
      </div>
      <button className="stack-item-remove" onClick={() => onRemove(technology.id)}>
        ✕
      </button>
    </div>
  )
}

export default StackItem