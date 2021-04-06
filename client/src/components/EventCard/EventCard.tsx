import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import moment from "moment";

import { AddEventValues } from "../../store/addEvent/types";

const EventCard: React.FC<AddEventValues> = ({ title, message, dateTime }) => {
  return (
    <Card className='card'>
      <CardContent>
        <div className='card__title-row'>
          <Typography
            variant='h3'
            gutterBottom
            style={{ marginRight: "0.5rem" }}
          >
            {title}
          </Typography>
          <Typography
            variant='h5'
            color='textSecondary'
            style={{ marginBottom: "0.7rem" }}
          >
            {moment(dateTime).format("DD, MMMM")}
          </Typography>
        </div>
        <Typography variant='h5' color='textSecondary' component='p'>
          {message}
        </Typography>
        {/* {platforms.isMail && <Typography variant='h6'>isMail</Typography>}
        {platforms.isWhatsApp && (
          <Typography variant='h6'>isWhatsApp</Typography>
        )} */}
      </CardContent>
    </Card>
  );
};

export default EventCard;
