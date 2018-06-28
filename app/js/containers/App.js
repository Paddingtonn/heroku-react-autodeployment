import React, { Component } from 'react';
import Home from './home.js';
import AppCalendar from './appCalendar.js';
import LogInForm from './login.js';
import Sample from './sample.js';

class Navigation extends Component{
    render(){
        return <div className="home_list">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/diet'>Diet Calendar</Link>
                </li>
                <li>
                    <Link to='/login'>LogIn Form</Link>
                </li>
            </ul>
        </div>
    }
}
class App extends Component{

    render() {
        return <HashRouter>
            <div>
                <Navigation/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/diet' component={Sample}/>
                    <Route path='/appCalendar/:user' component={AppCalendar}/>
                    <Route path='/login' component={LogInForm}/>
                </Switch>
            </div>
        </HashRouter>
    }
}


export default App;