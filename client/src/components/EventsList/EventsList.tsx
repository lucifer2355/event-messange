import React from "react";
import { Grid } from "@material-ui/core";

import EventCard from "../EventCard/EventCard";
import { AddEventValues } from "../../store/addEvent/types";

const EventsList: React.FC<AddEventValues> = ({data}) => {
  console.log(data);

  return (
    <div className='event__list'>
      <Grid container spacing={2}>
        {data.data.length > 0 &&
          data.map((event: AddEventValues) => (
            <Grid item xs={4} sm={12} md={6}>
              <EventCard
                title={event.title}
                message={event.message}
                dateTime={event.dateTime}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default EventsList;
