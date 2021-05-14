import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "../../components/NavBar/NavBar";
import AddEventForm from "../../components/AddEventForm/AddEventForm";
import EventsList from "../../components/EventsList/EventsList";
import { RootState } from "../../store/rootReducer";
import * as getEventsActions from "../../store/getEvents/getEventsAction";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { getEvents } = useSelector((state: RootState) => state);

  const getEventsFn = async () => {
    await dispatch(getEventsActions.getEvents());
  };

  useEffect(() => {
    getEventsFn();
  }, [getEvents.isLoading]);

  return (
    <>
      <NavBar />

      <div className='container'>
        <EventsList data={getEvents.events} />
        <AddEventForm />
      </div>
    </>
  );
};

export default HomePage;
