import React from "react";
import {
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Card as MuiCard,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { format } from "date-fns";
import styles from "./styles/Card.module.css";

const Card = ({ data }: any) => {

  return (
    <ul className={styles.container}>
      {data.map(({ name, id, details, date_utc }: any) => (
        <>
          <MuiCard key={id} className={styles.card}>
            <CardHeader
              avatar={<Avatar aria-label="recipe">R</Avatar>}
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={name}
              subheader={format(new Date(date_utc), "d/M/yyyy")}
            />
            <CardMedia
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {details}
              </Typography>
            </CardContent>
            <CardActions disableSpacing />
          </MuiCard>
        </>
      ))}
    </ul>
  );
};

export default Card;
