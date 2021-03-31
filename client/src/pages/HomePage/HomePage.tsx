import React, { useEffect } from "react";

import NavBar from "../../components/NavBar/NavBar";
import AddEventForm from "../../components/AddEventForm/AddEventForm";
import EventsList from "../../components/EventsList/EventsList";

const HomePage: React.FC = () => {
  return (
    <>
      <NavBar />

      <div className='container'>
        <EventsList />
        <AddEventForm />
      </div>
    </>
  );
};

export default HomePage;
