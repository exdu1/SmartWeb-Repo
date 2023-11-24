import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, TextField, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { create } from './api-user'; -- wait to integrate backend operations

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
    passowrd: '',
    email: '',
  });

  // Frontend design
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" className={classes.title}>
            SIGN UP
          </Typography>

        </CardContent>

      </Card>
    </div>
  );
};