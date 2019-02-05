export const Types = {
  POST_REQUEST: 'venda/POST_REQUEST',
  POST_SUCCESS: 'venda/POST_SUCCESS',
  POST_FAILURE: 'venda/POST_FAILURE',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function venda(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.POST_REQUEST:
      return { ...state, loading: true };
    case Types.POST_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.POST_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
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
};
