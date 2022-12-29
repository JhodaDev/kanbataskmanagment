export const Option = ({ value, active, action }) => {
  return (
    <div className={`leftbar__option${active ? ' leftbar__option--active' : action ? ' leftbar__option--action' : ''}`}>
      <div className="leftbar__option-content">
        <i className="icon-icon-board"></i>
        <span>{value}</span>
      </div>
    </div>
  )
}
