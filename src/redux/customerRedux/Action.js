import {
  FETCH_CUSTOMERDETAILS_REQUEST,
  FETCH_CUSTOMERDETAILS_SUCCESS,
  FETCH_CUSTOMERDETAILS_FAILURE,
} from "./Type";
import axios from "axios";

export const fetchCustomerdetails = (pageNo = 0) => {
  return function (dispatch) {
    dispatch(fetchCustomerdetailsRequest());

    axios
      .post(
        `http://localhost:4000/getUserCallWorkbook.do?pageNumber=${pageNo}&pageSize=5`
      )
      .then((response) => {
        const data = response.data.workbookItems;
        console.log("Redux reducer data sent:", pageNo, data);
        dispatch(fetchCustomerdetailsSuccess(data));

        //response.data
      })
      .catch((error) => {
        //error.message
        dispatch(fetchCustomerdetailsFailure(error.message));
      });
  };
};

const filterData = (data, filter) => {
  if (data) {
    function match(c) {
      return c.customerName.toLowerCase().includes(filter.toLowerCase());
    }

    console.log("searched key: ", filter);
    let filtered = data.filter(match);
    console.log("data key: ", data);
    console.log("filtered data key: ", filtered);

    //if(filtered.length>(pageIndex-1)*5)
    return filtered;
  } else {
    return [];
  }
};
export const searchCustomerdetails = (pageNo = 0, searchData) => {
  return function (dispatch) {
    dispatch(fetchCustomerdetailsRequest());
    var apiURL = `http://localhost:4000/getUserCallWorkbook.do?pageNumber=${pageNo}&pageSize=15`;
    if (searchData.length == 0) {
      apiURL = `http://localhost:4000/getUserCallWorkbook.do?pageNumber=${pageNo}&pageSize=5`;
    }
    axios
      .post(apiURL)
      .then((response) => {
        var data = response.data.workbookItems;

        if (searchData.length != 0) {
          data = filterData(response.data.workbookItems, searchData);
        }

        dispatch(fetchCustomerdetailsSuccess(data));

        //response.data
      })
      .catch((error) => {
        //error.message
        dispatch(fetchCustomerdetailsFailure(error.message));
      });
  };
};
export const fetchCustomerdetailsRequest = () => {
  return {
    type: FETCH_CUSTOMERDETAILS_REQUEST,
  };
};

export const fetchCustomerdetailsSuccess = (customerDetails) => {
  return {
    type: FETCH_CUSTOMERDETAILS_SUCCESS,
    payload: customerDetails,
  };
};

export const fetchCustomerdetailsFailure = (error) => {
  return {
    type: FETCH_CUSTOMERDETAILS_FAILURE,
    payload: error,
  };
};
