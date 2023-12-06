import React from 'react';
import { useState, useStyles, useEffect } from 'react';
import {Paper, List, Link, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Avatar, IconButton, Typography } from '@material-ui/core';
import { ArrowForward, Person } from '@material-ui/icons';
import list from 'react';

export default function Users() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setUsers(data);
      };
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant="h6" className={classes.title}>All Users</Typography>
      <List dense>
        {users.map((item, i) => {
          return <Link to={"/user/" + item._id} key={i}>
                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar>
                          <Person/>
                        </Avatar>
                      </ListItemAvatar>

                      <ListItemText primary={item.name}/>
                      <ListItemSecondaryAction>
                        <IconButton>
                          <ArrowForward/>
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                 </Link>
            })
         }
      </List>
    </Paper>
  );
};