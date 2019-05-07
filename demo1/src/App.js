import React from 'react';
import {
  Link,
  Route,
} from 'react-router'

class DetailView extends Component {
  render() {
    // 接收路由的参数
    console.log(this.props)
    return (
      <div>这是id={this.props.match.params.id}详情页</div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/detail/1">台灯 id:1</Link>
            </li>
            <li>
              <Link to="/detail/2">IPad id:2</Link>
            </li>
          </ul>
          <hr/>
          <Route path="/detail/:id" 
            component = {DetailView}
            // render={
            //   (routerProps)=> {
            //     console.log(routerProps)
            //     return <div>详情</div>
            //   }
            // }
            >
          </Route>
        </div>
      </Router>
    )
  }
}



export default App;
