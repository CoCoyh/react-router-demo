import React, {Component} from 'react';

import {
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

class CustomLink extends Component {
  render() {
    const {to, label} = this.props
    return (
      <Route path={to} exact children={(routerProps) => {
        const isActive = routerProps.match ? true : false
        return <Link to={to} style={{color: isActive ? 'red' :'black'}}>{label}</Link>
      }}>
      </Route>
    )
  }
}
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <CustomLink to='/' lable="首页"></CustomLink>
            </li>
            <li>
              <CustomLink to='/blog' lable="博客"></CustomLink>
            </li>
          </ul>
          <hr/>
          <Route path="/" exact render={()=> <div>首页</div>}></Route>
          <Route path="/blog" render={()=> <div>博客</div>}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
