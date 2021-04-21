import React, { useState } from "react";
import Head from "next/head";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Theme,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import styles from "../styles/Home.module.css";

const Card = React.lazy(() => import('components/Card'));

export default function Home({ data }: any) {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const theme = useTheme<Theme>();

  function handleOpenDrawer() {
    setOpenDrawer(true);
  }
  function handleDrawerClose() {
    setOpenDrawer(false);
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleOpenDrawer}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Spx
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={openDrawer}>
        <div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Next Launch", "Launches", "Rockets", "Drafts"].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <div className={styles.container}>
        <Head>
          <title>SpaceX</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          {data && (
            <>
              <Card data={data} />
            </>
          )}
        </main>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_API_BASE_URL}/launches/past`
  );
  const data = await response.json();
  return {
    props: {
      data: data.reverse(),
    },
  };
};
