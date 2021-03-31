import React from "react";
import { Grid } from "@material-ui/core";

import EventCard from "../EventCard/EventCard";

const EventsList: React.FC = () => {
  const date = new Date().getDate();
  return (
    <div className='event__list'>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={12} md={6}>
          <EventCard
            title='parth birthday'
            message='Happy birthday to my favorite former punk rocker!” (Or: hippie, goth, Valley Girl, grunge rocker)'
            dateTime={date}
            isMail={true}
            isWhatsApp={true}
          />
        </Grid>
        <Grid item xs={4} sm={12} md={6}>
          <EventCard
            title='parth birthday'
            message='Happy birthday to my favorite former punk rocker!” (Or: hippie, goth, Valley Girl, grunge rocker)'
            dateTime={date}
            isMail={true}
            isWhatsApp={true}
          />
        </Grid>
        <Grid item xs={4} sm={12} md={6}>
          <EventCard
            title='parth birthday'
            message='Happy birthday to my favorite former punk rocker!” (Or: hippie, goth, Valley Girl, grunge rocker)'
            dateTime={date}
            isMail={true}
            isWhatsApp={true}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default EventsList;
