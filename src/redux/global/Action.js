import {
  FETCH_GLOBAL_REQUEST,
  FETCH_GLOBAL_SUCCESS,
  FETCH_GLOBAL_FAILURE,
  GOTO_NEXT_PAGE,
  GOTO_PREV_PAGE,
} from "./Type";
import axios from "axios";

export const fetchGlobalData = () => {
  return function (dispatch) {
    dispatch(fetchGlobalRequest());
    axios
      .post(
        "http://localhost:4000/getUserCallWorkbook.do?pageNumber=0&pageSize=15"
      )
      .then((response) => {
        const data = response.data.overview;
        dispatch(fetchGlobalSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchGlobalFailure(error.message));
      });
  };
};

export const fetchGlobalRequest = () => {
  return {
    type: FETCH_GLOBAL_REQUEST,
  };
};

export const fetchGlobalSuccess = (data) => {
  return {
    type: FETCH_GLOBAL_SUCCESS,
    payload: data,
  };
};

export const fetchGlobalFailure = (error) => {
  return {
    type: FETCH_GLOBAL_FAILURE,
    payload: error,
  };
};

export const goToNextPage = () => {
  return {
    type: GOTO_NEXT_PAGE,
  };
};

export const goToPrevPage = () => {
  return {
    type: GOTO_PREV_PAGE,
  };
};
