import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'
import CartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import cart from './../cart/cart-helper'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menu: {
      position: 'fixed',
      top: theme.spacing(8), 
      right: theme.spacing(3),
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: '#9C89EB', 
      borderRadius: '15px',
      padding: '10px'
    }
}));

const isActive = (history, path) => {
    if (history.location.pathname == path)
      return {color: '#bef67a'}
    else
      return {color: '#ffffff'}
  }
  const isPartActive = (history, path) => {
    if (history.location.pathname.includes(path))
      return {color: '#bef67a'}
    else
      return {color: '#ffffff'}
  }

const NavItems = withRouter(({history}) => {
    const classes = useStyles();
    return (
    <div style={{'text-align': 'right'}}>
    <div className={classes.menu}>
        <Link to="/">
          <IconButton aria-label="Home" style={isActive(history, "/")}>
            <HomeIcon/>
          </IconButton>
        </Link>
        <br></br>
        <Link to="/users">
          <Button style={isActive(history, "/users")}>Users</Button>
        </Link>
        <br></br>
        <Link to="/shops/all">
          <Button style={isActive(history, "/shops/all")}>All Shops</Button>
        </Link>
        <br></br>
        <Link to="/cart">
          <Button style={isActive(history, "/cart")}>
            Cart
            <Badge color="secondary" invisible={false} badgeContent={cart.itemTotal()} style={{'marginLeft': '7px'}}>
              <CartIcon />
            </Badge>
          </Button>
        </Link>
        <br></br>       
        {
            !auth.isAuthenticated() && (<span>
            <Link to="/signup">
                <Button style={isActive(history, "/signup")}>Sign up
                </Button>
            </Link>
            <br></br>
            <Link to="/signin">
                <Button style={isActive(history, "/signin")}>Sign In
                </Button>
            </Link>
            
            </span>)
        }
        <br></br>
        {
            auth.isAuthenticated() && (<span>
            {auth.isAuthenticated().user.seller && (<Link to="/seller/shops"><Button style={isPartActive(history, "/seller/")}>My Shops</Button></Link>)}
            <Link to={"/user/" + auth.isAuthenticated().user._id}>
                <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
            </Link>
            <Button color="inherit" onClick={() => {
                auth.clearJWT(() => history.push('/'))
                }}>Sign out</Button>
            </span>)
        }
        </div>
    </div>
    )
})

export default NavItems;