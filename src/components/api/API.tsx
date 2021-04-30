import React from 'react'
import './API.css'
import { Paper } from '@material-ui/core'

// DONE 2.3 区分请求和响应作用域

type State = {
  showExampleJQuery: boolean;
}

type Props = any

class API extends React.Component<Props, State> {

  constructor(props: any) {
    super(props)
    this.state = {
      showExampleJQuery: false,
    }
  }
  render() {
    return (
      <Paper className="APIList">
        <div className="header">
          <span className="title">用户手册</span>
        </div>
        <div className="body">
          <div className="API">
            <ul>
              <li>
                <a href="https://github.com/thx/rap2-delos/wiki/user_manual">https://github.com/thx/rap2-delos/wiki</a>
              </li>
            </ul>
          </div>
        </div>
      </Paper>
    )
  }
}

export default API
