/**
 * Created by Administrator on 2017/3/5.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './zj.css';
class Zuoxia extends Component{
    constructor(props) {
        super(props);
        this.changeS = this.changeS.bind(this);
        this.state ={
            clickDiv:1
        }
    }
    render(){
        var lis=this.props.name;
        return(
            <ul className="box-left-bottom">
                {
                    lis.map(function(obj,index){
                        return(
                            <li className="box-left-bottom-li-two" key={index} data={obj} onClick={()=>this.changeS(obj)} style={this.state.clickDiv===obj.id?{backgroundColor:"#efd63b",color:"#323433",fontWeight:"bold",fontSize:"18px"}:{}}>{lis[index].sname}</li>
                        )
                    },this)
                }
            </ul>
        )
    }
    changeS(val){
        this.props.fn(val.id-1);
        this.setState({
            clickDiv:val.id
        })
    }
}
export default Zuoxia;