import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AddToCart from "./../cart/AddToCart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[100], // Light background color
    borderRadius: theme.spacing(2),
  },
  media: {
    height: 300,
    borderRadius: theme.spacing(2),
  },
  title: {
    margin: `${theme.spacing(3)}px 0 ${theme.spacing(2)}px`,
    color: theme.palette.primary.main,
    textAlign: "center",
    fontSize: "2em",
  },
  price: {
    color: theme.palette.text.secondary,
  },
  link: {
    textDecoration: "none",
  },
}));

export default function Products(props) {
  const classes = useStyles();

  // Limit the number of products based on the 'limit' prop
  const limit = 8;
  const limitedProducts = props.products.slice(0, limit);

  return (
    <div className={classes.root}>
      <Typography variant="h2" className="subtitle">
        Latest Products
      </Typography>
      <Grid container spacing={3}>
        {limitedProducts.map((product, i) => (
          <Grid item key={i} xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <Link to={"/product/" + product._id} className={classes.link}>
                <CardMedia
                  className={classes.media}
                  image={"/api/product/image/" + product._id}
                  title={product.name}
                />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="subtitle1" className={classes.price}>
                    $ {product.price}
                  </Typography>
                </CardContent>
              </Link>
              <CardActions>
                <AddToCart item={product} />
                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to={"/product/" + product._id}
                >
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {limitedProducts.length === 0 && props.searched && (
        <Typography variant="subtitle1" className={classes.title}>
          No products found! :(
        </Typography>
      )}
    </div>
  );
}
