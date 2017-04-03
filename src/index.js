import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import Zuida from "./zj/zuida.js";
//import App from './App.js';
//import App2 from './App2.js';
//import App3 from './App3.js';
//import { Router } from 'react-router';

//import { Router, Route, hashHistory } from 'react-router';
//import App from './App';
ReactDOM.render(
    <div>
        {
            <Zuida/>
            //<Router history={hashHistory}>
            //    <Route path="/" component={App}>
            //        <Route path="/repos" component={App2}/>
            //        <Route path="/about" component={App3}/>
            //    </Route>
            //</Router>,
        }

    </div>,
    document.getElementById('root')
);
//var str1 = {
//    "message": "登录成功",
//    "students": [{
//        "id": 1,
//        "pid": 1,
//        "sname": "张壮壮1",
//        "sno": "160201",
//        "init": 100000,
//        "score": 100000,
//        "status": "2",
//        "createTime": null,
//        "updateTime": "2017-01-14 15:33:39"
//    }, {
//        "id": 2,
//        "pid": 1,
//        "sname": "zhangzhuang1",
//        "sno": "160202",
//        "init": 100,
//        "score": 105,
//        "status": "1",
//        "createTime": null,
//        "updateTime": null
//    }, {
//        "id": 3,
//        "pid": 1,
//        "sname": "王苗苗1",
//        "sno": "160203",
//        "init": 100,
//        "score": 105,
//        "status": "1",
//        "createTime": null,
//        "updateTime": null
//    }, {
//        "id": 4,
//        "pid": 1,
//        "sname": "夏丽妃1",
//        "sno": "160204",
//        "init": 100,
//        "score": 100,
//        "status": "1",
//        "createTime": null,
//        "updateTime": null
//    }, {
//        "id": 5,
//        "pid": 1,
//        "sname": "周平1",
//        "sno": "160205",
//        "init": 100,
//        "score": 95,
//        "status": "1",
//        "createTime": null,
//        "updateTime": null
//    }],
//    "status": 200,
//    "rewards": [{"id": 3, "name": "打扫卫生", "type": "1", "des": "", "score": 5}, {
//        "id": 4,
//        "name": "三好学生",
//        "type": "1",
//        "des": "",
//        "score": 5
//    }, {"id": 5, "name": "学院活动比赛", "type": "1", "des": "", "score": 5}, {
//        "id": 6,
//        "name": "班级争光",
//        "type": "1",
//        "des": "",
//        "score": 5
//    }, {"id": 7, "name": "班委", "type": "1", "des": "", "score": 5}, {
//        "id": 8,
//        "name": "上课迟到",
//        "type": "2",
//        "des": "",
//        "score": -5
//    }, {"id": 9, "name": "上课早退", "type": "2", "des": "", "score": -5}, {
//        "id": 10,
//        "name": "上课戴耳机",
//        "type": "2",
//        "des": "",
//        "score": -5
//    }, {"id": 11, "name": "不跑早操", "type": "2", "des": "", "score": -5}, {
//        "id": 12,
//        "name": "上课吃东西",
//        "type": "2",
//        "des": "",
//        "score": -5
//    }, {"id": 13, "name": "上课玩游戏", "type": "2", "des": "", "score": -5}, {
//        "id": 14,
//        "name": "上课看视频",
//        "type": "2",
//        "des": "",
//        "score": -5
//    }, {"id": 15, "name": "打架", "type": "2", "des": "", "score": -5}, {
//        "id": 16,
//        "name": "吸烟",
//        "type": "2",
//        "des": "",
//        "score": -5
//    }, {"id": 17, "name": "喝酒", "type": "2", "des": "", "score": -5}, {
//        "id": 18,
//        "name": "辱骂上司",
//        "type": "2",
//        "des": "",
//        "score": -5
//    }, {"id": 19, "name": "宿舍卫生差", "type": "2", "des": "", "score": -5}, {
//        "id": 20,
//        "name": "个人卫生差",
//        "type": "2",
//        "des": "",
//        "score": -5
//    }, {"id": 21, "name": "发型不合格", "type": "2", "des": "", "score": -5}],
//    "grade": {
//        "id": 1,
//        "gname": "1602B",
//        "gscore": 99965,
//        "ginit": 2500,
//        "gcount": 25,
//        "gstatus": "1",
//        "createTime": null,
//        "updateTime": "2017-02-04 10:45:02",
//        "teacher": "苗老师",
//        "header": "胡主任",
//        "course": "xxx",
//        "officeType": "1"
//    },
//    "period": {
//        "id": 1,
//        "name": "第一教学周期",
//        "year": 2017,
//        "type": 1,
//        "startDate": "2017-02-06",
//        "endDate": "2017-03-06"
//    }
//}












//class LikeButton extends Component{
//  constructor(props){
//    super(props);
//    this.changeState=this.changeState.bind(this);
//    this.state={
//      aa:111
//    }
//  }
//  render(){
//    return(
//        <div>
//          <TextA value={this.state.aa}/>
//          <button onClick={this.changeState}>点击事件</button>
//        </div>
//    );
//  }
//  changeState(){
//    this.setState({
//      aa:"改变33333"
//    })
//  }
//};
//class TextA extends Component{
//  constructor(props){
//    super(props);
//    this.state={
//      bb:2222
//    }
//  }
//  componentWillUpdate(props,nextState){
//    if(props.value==222222){
//      this.setState({
//        b:333333
//      })
//    }
//  }
//  render(){
//    return(
//        <div>
//          <h1>{this.props.value}</h1>
//          <div>{this.state.bb}</div>
//        </div>
//    )
//  }
//  componentDidMount(props,nextState){
//    if(this.props.value==2222222){
//      this.setState({
//        b:3333333
//      })
//    }
//  }
//}
//ReactDOM.render(
//    <div>
//        <LikeButton/>
//
//        <Right/>
//    </div>,
//    document.getElementById('root')
//);










//var LikeButton =React.createClass({
//  getInitialState:function(){
//    return {Liked:false};
//  },
//  bandleClick:function(event){
//    this.setState({liked:!this.state.liked});
//  },
//  render:function(){
//    var text =this.state.liked ? 'like' : 'haven\'t likde';
//    return (
//      <p onClick={this. bandleClick}>
//        You {text} this. Click to toggle.
//      </p>
//    );
//  }
//});
//ReactDOM.render(
//  < LikeButton />,
//document.getElementById('root')
//);





//var HelloMessage = React.createClass({
//  render: function() {
//    return <h1>Hello {this.props.name} {this.props.id}</h1>;
//  }
//});
//ReactDOM.render(
//    <HelloMessage name="John" id="tom" />,
//    document.getElementById('example')
//);




//var HelloMessage=React.createClass({
//  renden:function(){
//    return <h1>Hello {this.props.name} {this.porps.id}</h1>
//  }
//});
//class App extends Component{
//  render(){
//    return <h1>Hello{this.props.name} {this.props.id}</h1>
//
//  }
//  //ReactDOM.render(
//  //  //<div>
//    <HelloMessage name="John"/>
//    </div>,
//  document.getElementById('root')
//);
 //var names = [{
 // name:"三好学生",
//  score:200
//
//},{
//  name:"清洁卫生",
//  score:300
//
//},{
//  name:"演讲比赛",
//  score:100
//
//},{
//  name:"班委",
//  score:200
//
//},{
//  name:"班级争光",
//  score:500
//
//}];

//var color=['red','blue','yellow'];
//ReactDOM.render(
//<div>{
//    names.map(function(value,index){
//      return <div className="box" key={index} style={{
//       // backgroundColor:color[index]
//        backgroundColor:color[index>=color.length?index-color.length:index]
//      }}>
//      <span className="span1">{names[index].name}</span>
//        <span className="span2">{names[index].score}</span>
//      </div>
//    })
//}</div>,
//    document.getElementById('root')
//);
//    <div>
//      {
//        names.map(function(name){
//          return <div>Hello,{name}!</div>
//        })
//      }
//    </div>,
//  document.getElementById('root')
//);





//<div>
//  {
//    names.map(function (value,index){
//      return <div key={index} style={{
//        backgroundColor:color[index]
//      }}>[value]</div>
//    })
//  }
//</div>,
//    document.getElementById('root')
//);
