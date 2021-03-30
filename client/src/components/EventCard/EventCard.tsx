import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";

import { AddEventValues } from "../../store/addEvent/types";

const EventCard: React.FC<AddEventValues> = ({
  title,
  message,
  dateTime,
  isMail,
  isWhatsApp,
}) => {
  return (
    <div>
      <Card className='card'>
        <CardContent>
          <Typography variant='h2' gutterBottom>
            {title}
          </Typography>
          <Typography variant='h6'>{dateTime}</Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {message}
          </Typography>
          {isMail && <Typography variant='h6'>isMail</Typography>}
          {isWhatsApp && <Typography variant='h6'>isWhatsApp</Typography>}
        </CardContent>
      </Card>
    </div>
  );
};

export default EventCard;
