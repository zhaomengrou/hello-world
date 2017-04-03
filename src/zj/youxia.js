/**
 * Created by Administrator on 2017/3/5.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './zj.css';
class Youxia extends Component{
    render(){
        var names=this.props.rew;
        return(
                <div className="box-right">
                    <div className="da-div">
                        <ul className="right-3">
                            {
                                names.map(function(value,index){
                                    return(
                                        <li key={index} onClick={()=>this.props.fn(index+5)}>
                                            <div className="ydd2">
                                                <div className="yy2"></div>
                                                <div className="yyl2">
                                                    <p>{names[index].score}$</p>
                                                </div>
                                                <div className="yyz2">
                                                    <p>{names[index].name}</p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                },this)
                            }
                        </ul>
                    </div>
                </div>
        )
    }
}
export default Youxia;