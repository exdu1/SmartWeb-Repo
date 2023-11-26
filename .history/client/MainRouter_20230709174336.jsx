import React from 'react'
import {Route, Route} from 'react-router-dom'
import Home from './core/Home' 
const MainRouter = () => {
return ( <div> 
<Switch>
<Route exact path="/" component={Home}/> 
</Switch>
</div> 
)
}
export default MainRouter