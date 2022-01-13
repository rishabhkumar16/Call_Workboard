import {
  FETCH_GLOBAL_FAILURE,
  FETCH_GLOBAL_REQUEST,
  FETCH_GLOBAL_SUCCESS,
  GOTO_NEXT_PAGE,
  GOTO_PREV_PAGE,
} from "./Type";

const initialstate = {
  loading: false,
  processedCustomerCount: "",
  totalCustomerCount: "",
  completedCallingMinutes: "",
  expectedCallingMinutes: "",
  totalPastDueAmount: "",
  totalPastDueProcessed: "",
  error: "",
  pageNo: 0,
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_GLOBAL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_GLOBAL_SUCCESS:
      return {
        ...state,
        loading: false,
        processedCustomerCount: action.payload.processedCustomerCount,
        totalCustomerCount: action.payload.totalCustomerCount,
        completedCallingMinutes: action.payload.completedCallingMinutes,
        expectedCallingMinutes: action.payload.expectedCallingMinutes,
        totalPastDueAmount: action.payload.totalPastDueAmount,
        totalPastDueProcessed: action.payload.totalPastDueProcessed,
        error: "",
      };

    case FETCH_GLOBAL_FAILURE:
      return {
        ...state,
        loading: false,
        processedCustomerCount: "",
        totalCustomerCount: "",
        completedCallingMinutes: "",
        expectedCallingMinutes: "",
        totalPastDueAmount: "",
        totalPastDueProcessed: "",
        error: action.payload,
      };
    case GOTO_NEXT_PAGE:
      return {
        ...state,
        pageNo: state.pageNo + 1,
      };
    case GOTO_PREV_PAGE:
      return {
        ...state,
        pageNo: state.pageNo - 1,
      };
    default:
      return state;
  }
};

export default reducer;
