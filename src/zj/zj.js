/**
 * Created by Administrator on 2017/2/28.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './zj.css';
import ipone from './1.png';
class LikeButton extends Component{
    render(){
        return(
            <div className="box">
                <div className="box-conter">
                    <div className="box-conter-left">数字媒体学院</div>
                    <div className="box-conter-conter">
                        <a className="box-conter-conte-a">{this.props.sname.year}年&nbsp;&nbsp;{this.props.sname.name}</a>

                        <span className="box-conter-conte-span-three">第三门课程《HTML/CSS》 </span>
                    </div>
                    <div className="box-conter-right">
                        <span className="box-conter-right-span">
                            任课老师：{this.props.gra.teacher} </span>

                        <span className="box-conter-right-span-three">
                            班主任： {this.props.gra.header}
                        </span>
                    </div>
                    <div className="ipone"></div>
                </div>
            </div>
        )
    }
}
export default LikeButton;