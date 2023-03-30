import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_ELEMENT
} from './actions';

const initialState = {
  loading: false,
  data: [],
  error: '',
  array: []

};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: ''
      };
    case FETCH_DATA_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload
      };
    case ADD_ELEMENT:

      return {
        ...state,
        array: action.payload
      }
    default:
      return state;
  }
};

export default reducer;