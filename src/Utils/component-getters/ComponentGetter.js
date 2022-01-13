import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MY_RENDER_APP } from "../Constants";

// Components
import FirstCard from "../../components/cards/FirstCard";
import SecondCard from "../../components/cards/SecondCard";
import ThirdCard from "../../components/cards/ThirdCard";
import FourthCard from "../../components/cards/FourthCard";
import FifthCard from "../../components/cards/FifthCard";
import SixthCard from "../../components/cards/SixthCard";
import LoaderCard from "./../../components/cards/LoaderCard";

// API
import {
  fetchCustomerdetails,
  fetchUpcomingCustomerdetails,
  fetchGlobalData,
} from "../../redux/index";

export default function ComponentGetter(props) {
  const dispatch = useDispatch();
  const pageNo = useSelector((state) => state.globalStore.pageNo);
  const customerDetails = useSelector(
    (state) => state.customerStore.customerDetails
  );
  const upcomingCustomerDetails = useSelector(
    (state) => state.upcomingStore.upcomingCustomerDetails
  );
  const upcomingCustomerError = useSelector(
    (state) => state.upcomingStore.error
  );
  const upcomingCustomerLoading = useSelector(
    (state) => state.upcomingStore.Loading
  );
  // const searchLoading = useSelector((state) => state.globalStore.searchLoading);
  // const searchData = useSelector((state) => state.globalStore.searchData);
  // const searchError = useSelector((state) => state.globalStore.searchError);
  const error = useSelector((state) => state.customerStore.error);
  const loading = useSelector((state) => state.customerStore.loading);
  //console.log("search data", searchData);
  useEffect(() => {
    dispatch(fetchCustomerdetails(pageNo));
    dispatch(fetchUpcomingCustomerdetails(pageNo));
    dispatch(fetchGlobalData());
  }, []);

  const { componentId } = props;
  //Rendering all cards
  switch (componentId) {
    case MY_RENDER_APP.FIRST_CARD:
      if (!error) {
        return (
          <>
            {loading ? (
              <LoaderCard />
            ) : (
              customerDetails[0] && (
                <FirstCard
                  customerDetails={customerDetails[0]}
                  loading={loading}
                />
              )
            )}
          </>
        );
      } else {
        return <> </>;
      }

    case MY_RENDER_APP.SECOND_CARD:
      if (!error) {
        return (
          <>
            {loading ? (
              <LoaderCard />
            ) : (
              customerDetails[1] && (
                <SecondCard
                  customerDetails={customerDetails[1]}
                  loading={loading}
                />
              )
            )}
          </>
        );
      } else {
        return <> </>;
      }
    case MY_RENDER_APP.THIRD_CARD:
      if (!error) {
        return (
          <>
            {loading ? (
              <LoaderCard />
            ) : (
              customerDetails[2] && (
                <ThirdCard
                  customerDetails={customerDetails[2]}
                  loading={loading}
                />
              )
            )}
          </>
        );
      } else {
        return <> </>;
      }
    case MY_RENDER_APP.FOURTH_CARD:
      if (!error) {
        return (
          <>
            {loading ? (
              <LoaderCard />
            ) : (
              customerDetails[3] && (
                <FourthCard
                  customerDetails={customerDetails[3]}
                  loading={loading}
                />
              )
            )}
          </>
        );
      } else {
        return <> </>;
      }
    case MY_RENDER_APP.FIFTH_CARD:
      if (!error) {
        return (
          <>
            {loading ? (
              <LoaderCard />
            ) : (
              customerDetails[4] && (
                <FifthCard
                  customerDetails={customerDetails[4]}
                  loading={loading}
                />
              )
            )}
          </>
        );
      } else {
        return <> </>;
      }

    case MY_RENDER_APP.SIXTH_CARD:
      if (!upcomingCustomerError) {
        return (
          <>
            {upcomingCustomerLoading ? (
              <LoaderCard />
            ) : (
              upcomingCustomerDetails && (
                <SixthCard
                  upcomingcustomerDetails={upcomingCustomerDetails}
                  upcomingloading={upcomingCustomerLoading}
                />
              )
            )}
          </>
        );
      } else {
        return <div>No data found </div>;
      }

    default:
      return null;
  }
}
