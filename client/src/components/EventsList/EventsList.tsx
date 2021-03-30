import React from "react";
import EventCard from "../EventCard/EventCard";

const EventsList: React.FC = () => {
  const date = new Date().getDate();
  return (
    <div>
      <EventCard
        title='parth birthday'
        message='Happy birthday to my favorite former punk rocker!” (Or: hippie, goth, Valley Girl, grunge rocker)'
        dateTime={date}
        isMail={true}
        isWhatsApp={true}
      />
    </div>
  );
};

export default EventsList;
