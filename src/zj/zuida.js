/**
 * Created by Administrator on 2017/3/5.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import LikeButton from "./zj.js";
import Right from "./you.js";
import Zuoxia from "./zuoxia.js";
import Youxia from "./youxia.js";
import Righgtxia from "./rightxia.js";
import Rightxiaxia from "./righxiaxia.js";
import Rightconte from "./rightconter.js";
import Rightcontertop from "./rightcontertop.js";
import Zhezhao from "./zhezhao.js";


import './zj.css';
var str1 = {
    "message": "登录成功",
    "students": [{
        "id": 1,
        "pid": 1,
        "sname": "张壮壮",
        "sex": "1",
        "identity": "123",
        "sno": "160201",
        "init": 100000,
        "score": 10425,
        "status": "1",
        "createTime": null,
        "updateTime": "2017-03-05 17:36:33",
        "market": "鲁东市场部",
        "pic": null,
        "beginsDate": null,
        "term": "一年",
        "birthday": "123"
    }, {
        "id": 2,
        "pid": 1,
        "sname": "zhangzhuang1",
        "sex": null,
        "identity": null,
        "sno": "160202",
        "init": 100,
        "score": 125,
        "status": "1",
        "createTime": null,
        "updateTime": null,
        "market": null,
        "pic": null,
        "beginsDate": null,
        "term": null,
        "birthday": null
    }, {
        "id": 3,
        "pid": 1,
        "sname": "王苗苗1",
        "sex": null,
        "identity": null,
        "sno": "160203",
        "init": 100,
        "score": 105,
        "status": "1",
        "createTime": null,
        "updateTime": null,
        "market": null,
        "pic": null,
        "beginsDate": null,
        "term": null,
        "birthday": null
    }, {
        "id": 4,
        "pid": 1,
        "sname": "夏丽妃1",
        "sex": null,
        "identity": null,
        "sno": "160204",
        "init": 100,
        "score": 110,
        "status": "1",
        "createTime": null,
        "updateTime": null,
        "market": null,
        "pic": null,
        "beginsDate": null,
        "term": null,
        "birthday": null
    }, {
        "id": 5,
        "pid": 1,
        "sname": "周平1",
        "sex": null,
        "identity": null,
        "sno": "160205",
        "init": 100,
        "score": 95,
        "status": "1",
        "createTime": null,
        "updateTime": null,
        "market": null,
        "pic": null,
        "beginsDate": null,
        "term": null,
        "birthday": null
    },{
        "id": 25,
        "pid": 1,
        "sname": "王王",
        "sex": "1",
        "identity": "5",
        "sno": "4",
        "init": 10000,
        "score": 10010,
        "status": "1",
        "createTime": "2017-03-04 16:44:06",
        "updateTime": "2017-03-05 12:46:47",
        "market": "鲁东市场部",
        "pic": null,
        "beginsDate": "8",
        "term": "一年",
        "birthday": "6"
    },{
        "id": 26,
        "pid": 1,
        "sname": "555",
        "sex": "1",
        "identity": "77",
        "sno": "66",
        "init": 10000,
        "score": 10000,
        "status": "1",
        "createTime": "2017-03-04 16:45:41",
        "updateTime": "2017-03-04 16:45:41",
        "market": "é2?????????oé?¨",
        "pic": null,
        "beginsDate": "99",
        "term": "????1′",
        "birthday": "88"
    }, {
        "id": 27,
        "pid": 1,
        "sname": "姜素素",
        "sex": "1",
        "identity": "123123123",
        "sno": "123123123",
        "init": 10000,
        "score": 10000,
        "status": "3",
        "createTime": "2017-03-04 16:55:48",
        "updateTime": "2017-03-06 13:49:47",
        "market": "鲁东市场部",
        "pic": null,
        "beginsDate": "123123123",
        "term": "一年",
        "birthday": "123123123"
    },{
        "id": 28,
        "pid": 1,
        "sname": "123",
        "sex": "1",
        "identity": "44",
        "sno": "33",
        "init": 10000,
        "score": 10000,
        "status": "1",
        "createTime": "2017-03-04 17:00:09",
        "updateTime": "2017-03-04 17:00:09",
        "market": "é2?????????oé?¨",
        "pic": null,
        "beginsDate": "66",
        "term": "????1′",
        "birthday": "55"
    }, {
        "id": 29,
        "pid": 1,
        "sname": "周润发",
        "sex": "1",
        "identity": "123123",
        "sno": "123123",
        "init": 10000,
        "score": 10000,
        "status": "2",
        "createTime": "2017-03-04 17:11:00",
        "updateTime": "2017-03-05 13:16:19",
        "market": "鲁东市场部",
        "pic": null,
        "beginsDate": "123123",
        "term": "一年",
        "birthday": "123123"
    },{
        "id": 30,
        "pid": 1,
        "sname": "文天祥",
        "sex": "1",
        "identity": "123123",
        "sno": "123123",
        "init": 10000,
        "score": 10000,
        "status": "2",
        "createTime": "2017-03-05 10:50:27",
        "updateTime": "2017-03-05 13:17:52",
        "market": "鲁东市场部",
        "pic": null,
        "beginsDate": "123123",
        "term": "一年",
        "birthday": "123123"
    }, {
        "id": 31,
        "pid": 1,
        "sname": "李白",
        "sex": "1",
        "identity": "132",
        "sno": "",
        "init": 10000,
        "score": 10000,
        "status": "2",
        "createTime": "2017-03-05 10:52:13",
        "updateTime": "2017-03-05 14:15:03",
        "market": "鲁东市场部",
        "pic": null,
        "beginsDate": "",
        "term": "一年",
        "birthday": "123"
    },{
        "id": 33,
        "pid": 1,
        "sname": "史远",
        "sex": "1",
        "identity": "123123",
        "sno": "123123",
        "init": 10000,
        "score": 10000,
        "status": "1",
        "createTime": "2017-03-06 14:10:01",
        "updateTime": "2017-03-08 16:46:33",
        "market": "鲁东市场部",
        "pic": null,
        "beginsDate": "123123",
        "term": "一年",
        "birthday": "123123"
    }],
    "status": 200,
    "rewards": [{"id": 3, "name": "打扫卫生", "type": "1", "des": "", "score": 5},
        {"id": 4, "name": "三好学生","type": "1", "des": "", "score": 5},
        {"id": 5, "name": "学院活动比赛", "type": "1", "des": "", "score": 5},
        {"id": 6, "name": "班级争光", "type": "1", "des": "", "score": 5},
        {"id": 7, "name": "班委", "type": "1", "des": "", "score": 5},
        {"id": 8, "name": "上课迟到", "type": "2", "des": "", "score": -5},
        {"id": 9, "name": "上课早退", "type": "2", "des": "", "score": -5},
        {"id": 10, "name": "上课戴耳机", "type": "2", "des": "", "score": -5},
        {"id": 11, "name": "不跑早操", "type": "2", "des": "", "score": -5},
        {"id": 12, "name": "上课吃东西", "type": "2", "des": "", "score": -5},
        {"id": 13, "name": "上课玩游戏", "type": "2", "des": "", "score": -5},
        {"id": 14, "name": "上课看视频", "type": "2", "des": "", "score": -5},
        {"id": 15, "name": "打架", "type": "2", "des": "", "score": -5},
        {"id": 16, "name": "吸烟", "type": "2", "des": "", "score": -5},
        {"id": 17, "name": "喝酒", "type": "2", "des": "", "score": -5},
        {"id": 18, "name": "辱骂上司", "type": "2", "des": "", "score": -5},
        {"id": 19, "name": "宿舍卫生差", "type": "2", "des": "", "score": -5},
        {"id": 20, "name": "个人卫生差", "type": "2", "des": "", "score": -5},
        {"id": 21, "name": "发型不合格", "type": "2", "des": "", "score": -5}],
    "grade": {
        "id": 1,
        "gname": "1602B",
        "gscore": 99965,
        "ginit": 2500,
        "gcount": 25,
        "gstatus": "1",
        "createTime": null,
        "updateTime": "2017-02-04 10:45:02",
        "teacher": "苗老师",
        "header": "胡主任",
        "course": "xxx",
        "officeType": "1"
    },
    "period": {
        "id": 1,
        "name": "第一教学周期",
        "year": 2017,
        "type": 1,
        "startDate": "2017-02-06",
        "endDate": "2017-03-06"
    }
};

var arr1=[];
var arr2=[];
for(var i=0;i<str1.rewards.length;i++){
    if(str1.rewards[i].type==1){
        arr1.push(str1.rewards[i])
    }else{
        arr2.push(str1.rewards[i])
    }
}

class Zuida extends Component{
    constructor(props) {
        super(props);
        this.changeState = this.changeState.bind(this);
        this.changData = this.changData.bind(this);
        this.state = {
            data:str1,
            flag: 0,
            num:-1
        }
    }

    render(){
        return(
            <div>
                <LikeButton sname={str1.period} gra={str1.grade}/>
                <div className="box-left">
                    <div className="box-left-left">
                        <Right gra={str1.grade}/>
                        <Zuoxia name={str1.students} fn={this.changeState}/>
                    </div>

                    <div className="box-right">
                        <Righgtxia data={this.state.data.students[this.state.flag]}/>
                        <Rightxiaxia/>
                        <Rightconte rew={arr1} fn={this.changData}/>
                        <Rightcontertop/>
                        <Youxia rew={arr2} fn={this.changData}/>
                    </div>

                    <Zhezhao name={this.state.num} changeBoxR={this.changData} names={this.state.data.rewards[this.state.num==-1?0:this.state.num]} nameNum={arr1.length-1} data={this.state.data.students[this.state.flag]} fn={this.changeDataState}/>
                </div>

            </div>
        )
    }
    changeState(val){
        this.setState({
            flag:val
        })
    }
    changData(val){
        this.setState({
            num:val
        })
    }
    changeDataState(val){
        this.setState({
            data:val
        })
    }
}
export default Zuida;