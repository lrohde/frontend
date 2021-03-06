export const Types = {
  POST_REQUEST: 'manejo/POST_REQUEST',
  POST_SUCCESS: 'manejo/POST_SUCCESS',
  POST_FAILURE: 'manejo/POST_FAILURE',
  GET_REQUEST: 'manejo/GET_REQUEST',
  GET_SUCCESS: 'manejo/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function manejo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.POST_REQUEST:
      return { ...state, loading: true };
    case Types.POST_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
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

  getRequest: data => ({
    type: Types.GET_REQUEST,
    payload: { data },
  }),

  getSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
