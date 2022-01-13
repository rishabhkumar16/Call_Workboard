import { combineReducers } from "redux";

// Reducers
import customerReducer from "./customerRedux/Reducer";
import upcomingReducer from "./upcomingCustomerRedux/Reducer";
import globalReducer from "./global/Reducer";

const rootReducer = combineReducers({
  customerStore: customerReducer,
  upcomingStore: upcomingReducer,
  globalStore:globalReducer
});

export default rootReducer;
