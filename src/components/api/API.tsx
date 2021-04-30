import React from 'react'
import { serve } from '../../relatives/services/constant'
import './API.css'
import { Paper, Button } from '@material-ui/core'

const ExampleJQuery = () => (
  <div>
    <ul>
      <li>先引入jQuery插件</li>
      <li>再引入基础插件</li>
      <li>最后引入RAP jQuery插件</li>
    </ul>
    <h4>示例代码</h4>
    <pre className="code-example">
      {
        '<script src="jquery.min.js"></script>\n' +
        '<script src="http://rap2api.taobao.org/app/plugin/:projectId"></script>\n' +
        '<script src="http://rap2api.taobao.org/libs/jquery.rap.js"></script>\n' +
        '$.ajax({\n' +
        '    url : \'/example/1501049256513\', // 自动拦截\n' +
        '    method : \'GET\',\n' +
        '    dataType : \'JSON\',\n' +
        '    success : function(data) {\n' +
        '      // 返回根据RAP文档及规则生成的mock数据\n' +
        '      $(\'#result\').html(JSON.stringify(data))\n' +
        '    }\n' +
        '})\n'
      }
    </pre>
  </div>
)

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
