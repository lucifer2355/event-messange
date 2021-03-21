import React from "react";
import AddEventForm from "../../components/AddEventForm/AddEventForm";

import NavBar from "../../components/NavBar/NavBar";

const HomePage: React.FC = () => {
  return (
    <>
      <NavBar />
      <AddEventForm />
    </>
  );
};

export default HomePage;
