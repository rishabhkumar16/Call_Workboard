import {
  FETCH_CUSTOMERDETAILS_FAILURE,
  FETCH_CUSTOMERDETAILS_REQUEST,
  FETCH_CUSTOMERDETAILS_SUCCESS,
  GOTO_NEXT_PAGE,
  GOTO_PREV_PAGE
} from "./Type";

const initialstate = {
  loading: false,
  customerDetails: [],
  error: "",
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CUSTOMERDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        customerDetails: action.payload,
        error: "",
      };

    case FETCH_CUSTOMERDETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        customerDetails: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
