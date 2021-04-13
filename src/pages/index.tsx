import Card from "components/Card";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText, Theme,
  Toolbar,
  Typography, useTheme
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useState } from "react";

export default function Home({ data }: any) {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const theme = useTheme<Theme>()

  function handleOpenDrawer() {
    setOpenDrawer(true);
  }
  function handleDrawerClose() {
    setOpenDrawer(false);
  }

  return (
    <>
      <AppBar
        position="fixed"
        // className={clsx(classes.appBar, {
        //   [classes.appBarShift]: open,
        // })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleOpenDrawer}
            edge="start"
            // className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Spx
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        // className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openDrawer}
        // classes={{
        //   paper: classes.drawerPaper,
        // }}
      >
        <div
        // className={classes.drawerHeader}
        >
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
          {["Next Launch", "Launches", "Rockets", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {/*{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {/*{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>{data && <Card data={data} />}</main>
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
