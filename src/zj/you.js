/**Created by Administrator on 2017/2/28.*/
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './zj.css';
import img from './1.jpg';
import imag from './1.jpg';
import image from './2.jpg';
import images from './2.png';
import yi from './9.jpg';
import re from './6.png';
import san from './7.png';
import si from './8.png';
class Right extends Component{
    render(){
        return(
            <div className="box-left">
                <div className="box-left-left">
                    <div className="img">
                        <div className="box-left-zhe">
                            <div className="imag"></div>
                            <a className="box-left-zhe-zi">WEB{this.props.gra.gname}</a>
                            <span className="box-left-zhe-span">人数：{this.props.gra.gcount}</span>
                            <span className="box-left-zhe-span-two">总额：33000元</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Right;