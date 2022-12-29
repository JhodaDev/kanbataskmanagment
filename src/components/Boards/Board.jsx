export const Board = () => {
  return (
    <div className="panel__columns">
      <div className="column">
        <div className="column__name mb-1">
          <span className="column__point"></span>
          <span>TODO (4)</span>
        </div>
        <div className="column__content"></div>
      </div>
      <div className="column column--action mt-2">
        <span>+ New Column</span>
      </div>
    </div>
  )
}
