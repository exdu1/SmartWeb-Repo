/*import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import unicornbikeImg from './../assets/images/unicornbike.jpg'

const useStyles = makeStyles(theme => ({ 
card: {
maxWidth: 600, 
margin: 'auto',
marginTop: theme.spacing(5) 
},
title: {
padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px 
${theme.spacing(2)}px`,
color: theme.palette.openTitle 
},
media: { 
minHeight: 400
} 
}))*/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import onlineshopping3 from './../assets/images/Picture1.jpg';

   

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 800,
    margin: 'auto',
    marginTop: theme.spacing(3),
  },
  title: {
    padding: theme.spacing(3, 2.5, 2),
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 1066,
  },

 
}));

export default function Home(){ 
const classes = useStyles()
return (
<Card className={classes.card}>
   <center>
  <Typography variant="h3" className={classes.title}>Home Page</Typography>
  <Typography variant="body2" component="p"> 
Welcome to SmartWeb Application
</Typography></center>
<CardMedia className={classes.media}
image={onlineshopping3} title="online shopping"/>
<CardContent>

</CardContent>
</Card> 
)
}

/*const MyComponent = () => {
  const classes = useStyles();


  <Typography variant="body2" component="p"> 
Welcome to SmartWeb Application.
</Typography> 



  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          Card Title
        </Typography>
        <CardMedia
          className={classes.media}
          image={unicornbikeImg}
          title="Unicorn Bike"
        />
        <Typography variant="body2" component="p">
          Card content goes here.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyComponent;*/

