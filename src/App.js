import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import {Menu} from '../src/js/Menu'
import {Header} from '../src/js/Header'
import {About} from '../src/js/About'
import {Portfolio} from '../src/js/Portfolio'
import {Blog} from '../src/js/Blog'
import {Contact} from '../src/js/Contact'
import {Footer} from '../src/js/Footer'
import './scss/main.css'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <Header/>
                    <Menu/>
                    <Switch>
                        <Route exact path='/about' component={About}/>
                        <Route path='/portfolio' component={Portfolio}/>
                        <Route path='/blog' component={Blog}/>
                        <Route path='/contact' component={Contact}/>
                    </Switch>
                    <Footer/>
                </div>
            </HashRouter>
        );
    }
}

export default App;
