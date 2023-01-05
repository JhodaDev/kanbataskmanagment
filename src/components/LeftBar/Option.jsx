import useStore from '../../store/store'

export const Option = ({ value, active, action }) => {
  const board = useStore((state) => state.board)

  const handleClick = (idElement) => {
    if (idElement === '+ Create New Board') {
      board.setModal('edit-board')
    } else {
      const { name, ...restObject } = board.boards.find((item) => item.name === idElement)
      const dataActive = { id: name, data: restObject.columns }
      board.setBoard(board.columns, dataActive)
    }
  }

  return (
    <div
      className={`leftbar__option${
        active === value
          ? ' leftbar__option--active'
          : action
          ? ' leftbar__option--action'
          : ''
      }`}
      onClick={() => handleClick(value)}
    >
      <div className="leftbar__option-content">
        <i className="icon-icon-board"></i>
        <span>{value}</span>
      </div>
    </div>
  )
}
