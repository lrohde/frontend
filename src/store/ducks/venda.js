export const Types = {
  POST_REQUEST: 'venda/POST_REQUEST',
  POST_SUCCESS: 'venda/POST_SUCCESS',
  POST_FAILURE: 'venda/POST_FAILURE',
  GET_REQUEST: 'venda/GET_REQUEST',
  GET_SUCCESS: 'venda/GET_SUCCESS',
  SET_CHECKOUT: 'venda/SET_CHECKOUT',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
  checkout: null,
};

export default function venda(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.POST_REQUEST:
      return { ...state, loading: true };
    case Types.POST_SUCCESS:
      return { ...state, loading: false };
    case Types.POST_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.SET_CHECKOUT:
      return { ...state, loading: false, checkout: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  postRequest: data => ({
    type: Types.POST_REQUEST,
    payload: { data },
  }),

  postSuccess: data => ({
    type: Types.POST_SUCCESS,
    payload: { data },
  }),

  postFailure: error => ({
    type: Types.POST_FAILURE,
    payload: { error },
  }),

  getRequest: data => ({
    type: Types.GET_REQUEST,
    payload: { data },
  }),

  getSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),

  setCheckout: data => ({
    type: Types.SET_CHECKOUT,
    payload: { data },
  }),
};
