import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import moment from "moment";

interface EventCardProps {
  title: string;
  message: string;
  dateTime: Date;
}

const EventCard: React.FC<EventCardProps> = ({ title, message, dateTime }) => {
  return (
    <Card className='card'>
      <CardContent>
        <div className='card__title-row'>
          <Typography
            variant='h4'
            gutterBottom
            style={{ marginRight: "0.5rem", fontWeight: 500 }}
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
      </CardContent>
    </Card>
  );
};

export default EventCard;
