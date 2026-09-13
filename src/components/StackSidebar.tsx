import type { Technology } from "../types/technology"
import StackItem from "./StackItem"

type StackSidebarProps = {
  count: number
  selected: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

function StackSidebar({ count, selected, onRemove, onRemoveAll }: StackSidebarProps){
  return(
    <aside className="stack-sidebar">

      <div className="stack-header">
        <h3>Your Stack</h3>
        <p className="stack-count">{count} Technologies Selected</p>
      </div>

      {count === 0 ? (
        <div className="stack-empty">
          <p>Your stack is empty.</p>
        </div>
      ) : (
        <div className="stack-items">
          {selected.map((technology) => (
            <StackItem
              key={technology.id}
              technology={technology}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}

      {count > 0 && (
        <button className="remove-all-button" onClick={onRemoveAll}>
          Remove All
        </button>
      )}

    </aside>
  )
}

export default StackSidebar