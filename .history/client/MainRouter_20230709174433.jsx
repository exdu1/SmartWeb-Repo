import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './core/Home' 
const MainRouter = () => {
return ( <div> 
<Routes>
<Route exact path="/" ele={Home}/> 
</Routes>
</div> 
)
}
export default MainRouter