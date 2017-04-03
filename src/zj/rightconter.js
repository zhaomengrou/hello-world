/**
 * Created by Administrator on 2017/3/6.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './zj.css';
class Rightconte extends Component{
    render(){
        var names=this.props.rew;
        return(
            <div className="conter">
                <ul className="conter-top">
                    {
                        names.map(function(value,index){
                            return(
                                <li className="conter-top-left" key={index} onClick={()=>this.props.fn(index)}>
                                    <div className="right-2-1-top-z1">
                                        <p>{names[index].name}</p>
                                    </div>
                                    <div className="right-2-1-top-z2">
                                        <p>+{names[index].score}$</p>
                                    </div>
                                </li>
                            )
                        },this)
                    }

                </ul>
            </div>
        )
    }
}
export default Rightconte;
