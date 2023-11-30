import React, {useState} from 'react';
import {Card, CardActions, CardContent, Button, TextField, Typography, Icon} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import auth from './auth-helper.js'
import {Redirect} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import {signin} from './api-auth.js';

const useStyles = makeStyles(theme => ({
  card: {
    makWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  }
}));

export default function Signin(props) {
  const location = useLocation();
  console.log(location.state);

  const classes = useStyles();
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    redirectToReferrer: false
  });

  const clickSubmit = () => {
    const user = {
      email: values.email || undefined,
      password: values.password || undefined
    };

    console.log(user);
    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error});
      } else {
        console.log(data);
        auth.authenticate(data, () => {
          setValues({ ...values, error: '', redirectToReferrer: true});
        });
      };
    });
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value})
  };

  const {from} = props.location.state || {
    from: {
      pathname: '/'
    }
  };
  
  const {redirectToReferrer} = values;
  if (redirectToReferrer) {
    return <Redirect to={from}/>;
  }


  // Front-end Design
  return (
    <Card className={classes.card}>
      <Typography variant="h6" className={classes.title}>SIGN IN</Typography>
      <TextField 
        id="email" 
        type="email" 
        label="Email" 
        className={classes.textField}
        value={values.email}
        onChange={handleChange('email')}
        margin="normal"/>
      <br/>
      <TextField
        id="password"
        type="password"
        label="Password"
        className={classes.textField}
        value={values.password}
        onChange={handleChange('password')}
        margin="normal"/>
      <br/> {
        values.error && (<Typography component="p" color="error">
          {values.error}
        </Typography>)
      }
      <CardActions>
        <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Sign in</Button>
      </CardActions>
    </Card>
    
  )

};