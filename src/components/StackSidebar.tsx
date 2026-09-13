type StackSidebarProps = {
  count: number
}

function StackSidebar({ count }: StackSidebarProps) {
  return (
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
          <p>Items will go here</p>
        </div>
      )}
      {count > 0 && (
        <button className="remove-all-button">
          Remove All
        </button>
      )}

    </aside>
  )
}
export default StackSidebar