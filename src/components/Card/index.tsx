import React from "react";
import {
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Card as MuiCard,
  Button,
} from "@material-ui/core";
import { format } from "date-fns";
import styles from "./styles/Card.module.css";

const Card = ({ data }: any) => (
  <ul className={styles.container}>
    {data.map(({ name, id, details, date_utc }: any) => (
      <>
        <MuiCard key={id} className={styles.card}>
          <CardHeader
            action={
              <Button href={`launches/${id}`} color="primary">
                Detalhes
              </Button>
            }
            title={name}
            subheader={format(new Date(date_utc), "d/M/yyyy")}
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

export default React.memo(Card);
