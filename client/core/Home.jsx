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
     <br />
<br />
SmartWeb is Smart Web is a online marketplace designed to connect skilled freelancers  <br /> 
offering a range of internet services with individuals and businesses seeking expert solutions. <br />
<br />Whether you're a web developer, digital marketer, graphic designer, or SEO specialist, <br />
Smart Web provides a platform to showcase your talents and find meaningful projects.
</Typography></center>
<CardMedia className={classes.media}
image={onlineshopping3} title="online shopping"/>
<CardContent>

</CardContent>
</Card> 
)
}


