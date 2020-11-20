import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//importando componentes
import Login from './pages/Login/Login'
import Welcome from './pages/Welcome/Welcome'
import Watch from './pages/Watch/Watch'
import What_Infraigment from './pages/What_Infringement/What_Infraigment' 

const Routes:React.FC = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route 
                    path="/" 
                    component={Login} 
                    exact
                />
                <Route 
                    path="/welcome" 
                    component={Welcome} 
                />
                <Route
                    path="/watch"
                    component={Watch}
                />
                <Route
                    path="/what_infraigment"
                    component={What_Infraigment}
                />
            </Switch>
        </BrowserRouter> 
    )
}

export default Routes