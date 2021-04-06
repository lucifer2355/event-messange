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

const EventCard: React.FC<AddEventValues> = ({
  title,
  message,
  dateTime,
  platforms,
}) => {
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

        <div className='card__platform'>
          {platforms !== undefined &&
            platforms.map(
              (platform) =>
                platform.isWhatsApp && (
                  <img
                    src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png'
                    alt='whatsApp'
                    className='card__platform-image'
                  />
                )
            )}
          {platforms !== undefined &&
            platforms.map(
              (platform) =>
                platform.isMail && (
                  <img
                    src='https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png'
                    alt='mail'
                    className='card__platform-image'
                  />
                )
            )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
