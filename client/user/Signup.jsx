import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Avatar, Typography, TextField, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { create } from './api-user';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  error: {
    color: 'red',
  },
  submit: {
    margin: '0 auto',
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: 18,
  },
}));


export default function Signup() {
  const classes = useStyles();

  // useState and event handlers
  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
    open: false,
    error: ''
  });

  const [open, setOpen] = useState(false);

  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value});
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clickSubmit = () => {
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined
    }
    create(user).then((data) => {
      console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error})
      } else {
        setValues({ ...values, error: '', open: true})
      }
    })
  }   

  Signup.PropTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
  };

  // Frontend design
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" className={classes.title}>
            SIGN UP
          </Typography>

          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={values.name}
            onChange={handleChange('name')}
            margin="normal"
          />

          <TextField
            id="email"
            label="Email"
            className={classes.textField}
            value={values.email}
            onChange={handleChange('email')}
            margin="normal"
          />

          <TextField
            id="password"
            label="Password"
            className={classes.textField}
            value={values.password}
            onChange={handleChange('password')}
            type="password"
            margin="normal"
          />  

        <br/> {
             values.error && (<Typography component="p" color="error">
             {values.error}</Typography>)
          }
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained"
            className={classes.submit}
            onClick={clickSubmit}>
            SUBMIT  
          </Button>
        </CardActions>
      </Card>

      <Dialog open={values.open} onClose={handleClose}>
        <DialogTitle>Success!</DialogTitle>
        <DialogContent>
          <DialogContentText>Your new account has been created.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/Signin">
            <Button color="primary" autofocus variant="contained" onClick={handleClose}>SIGN IN</Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};