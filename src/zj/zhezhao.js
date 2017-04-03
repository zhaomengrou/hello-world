/**
 * Created by Administrator on 2017/3/6.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './zj.css';
class Zhezhao extends Component{
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
        this.sure = this.sure.bind(this);
        this.state = {
            score: this.props.data.score
        }
    }
    render(){
        return(
            <div className="zsm"  style={this.props.name>-1?{display:"block"}:{display:"none"}}>
                <div className="zhezhao">
                    <div className="zhezhao-conter">
                        <div className="zhezhao-conter-zi" >
                        <p>{this.props.names.id<this.props.nameNum+4?"奖励加薪项目":"惩罚减新项目"}</p>
                        </div>

                        <div className="zhezhao-gang"></div>
                       <div className="zhong">
                           <div className="zhong-zhong">
                              <p>{this.props.names.id<this.props.nameNum.id?this.props.names.name:this.props.names.name}</p>

                           </div>
                           <div className="zhong-right">
                               <p>{this.props.names.id<this.props.nameNum.id?"+"+this.props.names.score:this.props.names.score}<span>$</span></p>
                           </div>
                       </div>
                        <div className="bottom">
                            <div className="bottom-anniu"onClick={this.remove}>取消</div>
                            <div className="bottom-annius" onClick={this.sure}>确定</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    remove(){
        this.props.changeBoxR(-1);
    }
    sure(){
        this.props.changeBoxR(-1);
        var score = (this.props.data.score)+=(this.props.names.id<8?this.props.names.score:this.props.names.score);
        this.setState({
            score:score
        })
    }
}
export default Zhezhao;