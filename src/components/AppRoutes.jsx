import React from 'react'
import Banner from './organisms/Banner';
import Form from './pages/Form';
import Courses from './pages/Courses'
import SelectedCourse from './pages/SelectedCourse'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainMenu from './organisms/MainMenu'
import History from './pages/History'
import Users from './pages/Users';

const AppRoutes = () => (
    <Router>
        <MainMenu />
        <Switch>
            <Route path='/' exact component={Banner}/>
            <Route path='/courses/:id' component={SelectedCourse}/>
            <Route path='/courses' component={Courses}/>
            <Route path='/form' component={Form}/>
            <Route path='/history/:value' component={History}/>
            <Route path='/history' component={History}/>
            <Route path='/users' component={Users}/>
            <Route component={() => (
                <div className='ed-grid'>
                <h1>Error 404</h1>
                <span>Página no encontrada.</span>
                </div>
            )}/>
        </Switch>
  </Router> 
)

export default AppRoutes