export const modal = (set, get) => {
  return {
    active: '',
    show: false,
    data: {},
    toggle: (idModal) => {
      const active = !get().modal.show ? idModal : ''
      set((state) => ({
        modal: {
          ...state.modal,
          active,
          show: !state.modal.show
        }
      }))
    },
    handleClick: (e) => {
      // obtener el active del state
      const active = get().active
      console.log(active)
    },
    setData: (data) => {
      set((state) => ({
        modal: {
          ...state.modal,
          data
        }
      }))
    }
  }
}
