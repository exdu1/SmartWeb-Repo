
import React, { useState, useEffect } from 'react';
import { Paper, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Avatar, IconButton, Typography, makeStyles } from '@material-ui/core';
import { ArrowForward, Person } from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom'; 
import { list } from './api-user'

const useStyles = makeStyles((theme) => ({
  root: {
    // Add your styles here
  },
  title: {
    // Add your styles here
  },
}));

// export default function Users() {
//   useEffect(() => {
//     const abortController = new AbortController();
//     const signal = abortController.signal;

//     list(signal).then((data) => {
//       if (data && data.error) {
//         console.log(data.error);
//       } else {
//         setUsers(data);
//       };
//     });

//     return function cleanup() {
//       abortController.abort();
//     };
//   }, []);

//   const [users, setUsers] = useState([]);
//   const classes = useStyles();

//   return (
//     <Paper className={classes.root} elevation={4}>
//       <Typography variant="h6" className={classes.title}>All Users</Typography>
//       <List dense>
//         {users.map((item, i) => {
//           return <Link to={"/user/" + item._id} key={i}>
//                     <ListItem button>
//                       <ListItemAvatar>
//                         <Avatar>
//                           <Person/>
//                         </Avatar>
//                       </ListItemAvatar>

//                       <ListItemText primary={item.name}/>
//                       <ListItemSecondaryAction>
//                         <IconButton>
//                           <ArrowForward/>
//                         </IconButton>
//                       </ListItemSecondaryAction>
//                     </ListItem>
//                  </Link>
//             })
//          }
//       </List>
//     </Paper>
//   );
// };



export default function Users() {
  const [users, setUsers] = useState([])
useEffect(() => {
  const abortController = new AbortController()
  const signal = abortController.signal
  list(signal).then((data) => {
if (data && data.error) { 
console.log(data.error)
} else { 
  console.log(data)
setUsers(data)
} 
})
return function cleanup(){ 
abortController.abort()
} 
}, [])


  const classes = useStyles()
return (
<Paper className={classes.root} elevation={4}>
<Typography variant="h6" className={classes.title}> 
All Users
</Typography> 
<List dense>
{users.map((item, i) => {
  return  <Link component={RouterLink} to={"/user/" + item._id} key={i}>
  
<ListItem button> 
<ListItemAvatar>
<Avatar> 

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
})} 
</List>
</Paper>
)
}
