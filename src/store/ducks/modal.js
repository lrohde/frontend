export const Types = {
  SHOW_MODAL: 'modal/SHOW_MODAL',
  SHOW_MODAL_ERROR: 'modal/SHOW_MODAL_ERROR',
  CLOSE_MODAL: 'modal/CLOSE_MODAL',
};

const INITIAL_STATE = {
  show: false,
  title: null,
  subtitle: [],
  theme: null,
  error: false,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL:
      return {
        ...state,
        show: true,
        title: action.payload.title,
        subtitle: action.payload.subtitle,
        theme: action.payload.theme,
        error: false,
      };
    case Types.CLOSE_MODAL:
      return { ...state, show: false };
    case Types.SHOW_MODAL_ERROR:
      return {
        ...state,
        show: true,
        title: action.payload.title,
        subtitle: action.payload.subtitle,
        theme: action.payload.theme,
        error: true,
      };
    default:
      return state;
  }
}

export const Creators = {
  showModal: (title, subtitle, theme) => ({
    type: Types.SHOW_MODAL,
    payload: { title, subtitle, theme },
  }),

  showModalError: (title, subtitle, theme) => ({
    type: Types.SHOW_MODAL_ERROR,
    payload: { title, subtitle, theme },
  }),

  closeModal: () => ({ type: Types.CLOSE_MODAL }),
};
