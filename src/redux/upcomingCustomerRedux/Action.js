import {
  FETCH_UPCOMINGCUSTOMERDETAILS_REQUEST,
  FETCH_UPCOMINGCUSTOMERDETAILS_SUCCESS,
  FETCH_UPCOMINGCUSTOMERDETAILS_FAILURE,
} from "./Type";
import axios from "axios";

const customizeUpcomingCustomerData = (data) => {
  var example = [data["upcomingOpenAmount"]].concat(
    data["upcomingPastDueBucketDocumentAmount"]
  );

  const sum = example.reduce(add, 0); // with initial value to avoid when the array is empty

  function add(accumulator, a) {
    return accumulator + a;
  }

  example = example.map((x) => (x / sum) * 100);

  for (let i = 0; i < example.length; i++) {
    example[i] = example[i].toFixed(2);
    example[i] = parseInt(example[i]);
  }

  if (example.length != 0) {
    return example;
  }
};

export const fetchUpcomingCustomerdetails = (pageNo = 0) => {
  return function (dispatch) {
    dispatch(fetchUpcomingCustomerdetailsRequest());

    axios
      .post(
        `http://localhost:4000/getUpcomingSummary.do?pageNumber=${pageNo}&pageSize=5`
      )
      .then((response) => {

        if(response.data["upcomingCallingMinutes"]){
          const upcomingData = customizeUpcomingCustomerData(response.data);
          dispatch(fetchUpcomingCustomerdetailsSuccess(upcomingData));
        }
        else{
          dispatch(fetchUpcomingCustomerdetailsFailure("no data found"));
        }
      
        // if(response.data){
        //   const upcomingData = customizeUpcomingCustomerData(response.data);
        //   console.log("response got from upcoming customer")
        //   dispatch(fetchUpcomingCustomerdetailsSuccess(upcomingData));
        // }
        // else{
        //   dispatch(fetchUpcomingCustomerdetailsFailure("no data found"));
        // }
       
      })
      .catch((error) => {
        //error.message
        dispatch(fetchUpcomingCustomerdetailsFailure(error.message));
      });
  };
};

export const fetchUpcomingCustomerdetailsRequest = () => {
  return {
    type: FETCH_UPCOMINGCUSTOMERDETAILS_REQUEST,
  };
};

export const fetchUpcomingCustomerdetailsSuccess = (
  upcomingCustomerDetails
) => {
  return {
    type: FETCH_UPCOMINGCUSTOMERDETAILS_SUCCESS,
    payload: upcomingCustomerDetails,
  };
};

export const fetchUpcomingCustomerdetailsFailure = (error) => {
  return {
    type: FETCH_UPCOMINGCUSTOMERDETAILS_FAILURE,
    payload: error,
  };
};
