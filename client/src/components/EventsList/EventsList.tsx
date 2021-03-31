import React from "react";
import EventCard from "../EventCard/EventCard";

const EventsList: React.FC = () => {
  const date = new Date().getDate();
  return (
    <div className='event__list'>
      <div className='event__list__cards-view'>
        <EventCard
          title='parth birthday'
          message='Happy birthday to my favorite former punk rocker!” (Or: hippie, goth, Valley Girl, grunge rocker)'
          dateTime={date}
          isMail={true}
          isWhatsApp={true}
        />
        <EventCard
          title='parth birthday'
          message='Happy birthday to my favorite former punk rocker!” (Or: hippie, goth, Valley Girl, grunge rocker)'
          dateTime={date}
          isMail={true}
          isWhatsApp={true}
        />
        <EventCard
          title='parth birthday'
          message='Happy birthday to my favorite former punk rocker!” (Or: hippie, goth, Valley Girl, grunge rocker)'
          dateTime={date}
          isMail={true}
          isWhatsApp={true}
        />
        <EventCard
          title='parth birthday'
          message='Happy birthday to my favorite former punk rocker!” (Or: hippie, goth, Valley Girl, grunge rocker)'
          dateTime={date}
          isMail={true}
          isWhatsApp={true}
        />
        <EventCard
          title='parth birthday'
          message='Happy birthday to my favorite former punk rocker!” (Or: hippie, goth, Valley Girl, grunge rocker)'
          dateTime={date}
          isMail={true}
          isWhatsApp={true}
        />
      </div>
    </div>
  );
};

export default EventsList;
