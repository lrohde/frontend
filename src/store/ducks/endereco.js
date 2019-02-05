export const Types = {
  GET_REQUEST: 'endereco/GET_REQUEST',
  GET_SUCCESS: 'endereco/GET_SUCCESS',
  GET_FAILURE: 'endereco/GET_FAILURE',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function endereco(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  getRequest: data => ({
    type: Types.GET_REQUEST,
    payload: { data },
  }),

  getSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),

  getFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error },
  }),
};
