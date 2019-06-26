import React, {Component} from 'react';
import './index.css'; // css样式
import Monitoring from './child/monitoring';  // 集中监控
import MonitoringMore from './child/monitoring-more';  // 集中监控
import Study from './child/study';  // 数据研判
import Pigeonhole from './child/pigeonhole'; // 案件归档
import Exchange from './child/exchange'; // 工作交流
import Management from './child/management'; // 系统管理
import Header from '../../component/header/index'; // 头部组件
import { Switch, Route, Redirect } from "react-router-dom";

class Deploy extends Component {
    constructor (props) {
      super(props)
      this.state = {
        navList : [
          {
            name : '首页',
            link : '/deploy/deploys',
          },{
            name : '作战部署',
            link : '/deploy/operational',
          },
          {
            name : '作战指挥',
            link : '/deploy/command',
          },
          {
            name : '集中监控',
            link : '/deploy/monitoring',
          },{
            name : '数据研判',
            link : '/deploy/study',
          },
          {
            name : '案件归档',
            link : '/deploy/pigeonhole',
          },
          {
            name : '工作交流',
            link : '/deploy/exchange',
          },
          {
            name : '系统管理',
            link : '/deploy/management',
          }
        ],
        active : 0,
        headerName: '作战指挥平台'
      }
    }

    tab(val , index) {
      this.setState({ 
        active : index
      })
      this.props.history.push(val.link)
    }
    render() {
      return ( 
        <div className = "deploys" >
            <Header></Header>
            <div className="navList">
              {
                this.state.navList.map((item , index) => {
                  return <span key={index} onClick={()=>{this.tab(item , index)}} className={index === this.state.active ? 'active' : ''} >
                   {
                     item.name
                   }
                  </span>
                })
              }
            </div>
            <main className="contentMain">
              <Switch>
                 <Route exact path="/deploy" render={() => {
                   return <Redirect to="/deploy/study"/>
                 }}/>
                <Route path="/deploy/deploys" />
                <Route path="/deploy/monitoring" component={Monitoring} />
                <Route path="/deploy/study" component={Study} />
                <Route path="/deploy/pigeonhole" component={Pigeonhole} />
                <Route path="/deploy/exchange" component={Exchange} />
                <Route path="/deploy/management" component={Management} />
                <Route path="/deploy/monitoringMore" component={MonitoringMore} />
              </Switch>
            </main>
        </div>
              
      );
    }
  }
  
  export default Deploy;