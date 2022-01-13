import {
  FETCH_UPCOMINGCUSTOMERDETAILS_REQUEST,
  FETCH_UPCOMINGCUSTOMERDETAILS_SUCCESS,
  FETCH_UPCOMINGCUSTOMERDETAILS_FAILURE,
} from "./Type";

const initialstate = {
  loading: false,
  upcomingCustomerDetails: [],
  error: "",
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_UPCOMINGCUSTOMERDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_UPCOMINGCUSTOMERDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        upcomingCustomerDetails: action.payload,
        error: "",
      };

    case FETCH_UPCOMINGCUSTOMERDETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        upcomingCustomerDetails: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
