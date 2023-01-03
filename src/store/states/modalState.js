export const modal = (set, get) => {
  return {
    active: '',
    show: false,
    toggle: (idModal) => {
      set((state) => ({
        modal: {
          ...state.modal,
          active: idModal,
          show: !state.modal.show
        }
      }))
    },
    handleClick: (e) => {
      // obtener el active del state
      const active = get().active
      console.log(active)
    },
    data: {},
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
