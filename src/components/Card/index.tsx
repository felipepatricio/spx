import React from "react";
import {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Card as MuiCard, Button
} from "@material-ui/core";
import { format } from "date-fns";
import styles from "./styles/Card.module.css";

const Card = ({ data }: any) => {

  return (
    <ul className={styles.container}>
      {data.map(({ name, id, details, date_utc }: any) => (
        <>
          <MuiCard key={id} className={styles.card}>
            <CardHeader
              action={
                <Button href={`${id}`} color="primary">Detalhes</Button>
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
