import React, {Component} from 'react';

import {
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

class IndexView extends Component {
  render() {
    return (
      <div>你好！</div>
    )
  }
}

class BlogView extends Component {
  render() {
    return (
      <div>博客</div>
    )
  }
}

const routers = [
  {
    path: "/",
    exact: true,
    component: IndexView
  },
  {
    path: "/blog",
    exact: true,
    component: BlogView
  }
]

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/blog">博客</Link>
            </li>
          </ul>
          <hr/>
          {
            routers.map((v, k) => {
              return <Route key={k} path={v.path} exact={v.exact} component={v.component}></Route>
            })
          }
        </div>
      </Router>
    )
  }
}

export default App;
