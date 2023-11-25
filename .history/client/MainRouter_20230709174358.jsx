import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './core/Home' 
const MainRouter = () => {
return ( <div> 
<>
<Route exact path="/" component={Home}/> 
</>
</div> 
)
}
export default MainRouter