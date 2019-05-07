import React, {Component} from 'react';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Prompt
} from 'react-router-dom'

class Form extends Component {
  // 初始化state
  state={
    value: ""
  }
  render() {
    const {value} =this.state
    const {history} = this.props
    if(value) {
      history.block('这是一个提示信息')
    }
    return (
      <div>
        {/* <Prompt 
          when={value ? true : false}
          message="你将错过100w"
        >
        </Prompt> */}
        <input type="text" value={value}
        onChange={()=>{}} 
        onInput={
          (e) => {
            this.setState({
              value: e.target.value
            })
          }
        }/>
      </div>
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
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/form">表单</Link>
            </li>
          </ul>
          <hr/>
          {/* */}
          <Route path="/" exact render={()=><div></div>}></Route>
          <Route path="/form" exact component={Form}></Route>
        </div>
      </Router>
    )
  }
}

export default App;
