import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { list } from "./../shop/api-shop.js";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    margin: "auto",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
    boxShadow: "none",
  },
  title: {
    margin: `${theme.spacing(3)}px 0 ${theme.spacing(2)}px`,
    color: theme.palette.primary.main,
    textAlign: "center",
    fontSize: "2em",
  },
  shop: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.grey[100], // Light background color
    borderRadius: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    height: "80%",
  },
  link: {
    textDecoration: "none",
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: theme.spacing(2),
  },
  shopDetails: {
    flex: 1,
  },
  shopTitle: {
    fontSize: "1.5em",
    marginBottom: theme.spacing(1),
  },
  subheading: {
    color: theme.palette.text.secondary,
  },
}));

export default function Shops(props) {
  const classes = useStyles();
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    list(signal).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setShops(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  // Limit the number of shops based on the 'limit' prop
  const limitedShops = shops.slice(0, props.limit);

  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography variant="h3" className="shopTitle">
          See more sellers!
        </Typography>
        <Grid container spacing={3}>
          {limitedShops.map((shop, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Link to={"/shops/" + shop._id} className={classes.link}>
                <Paper className={classes.shop}>
                  <Avatar
                    className={classes.avatar}
                    src={
                      "/api/shops/logo/" + shop._id + "?" + new Date().getTime()
                    }
                  />
                  <div className={classes.shopDetails}>
                    <Typography variant="h6" className={classes.shopTitle}>
                      {shop.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      className={classes.subheading}
                    >
                      {shop.description}
                    </Typography>
                  </div>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
}
