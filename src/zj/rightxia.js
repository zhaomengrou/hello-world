/**
 * Created by Administrator on 2017/3/6.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './zj.css';
class Righgtxia extends Component{
    render(){
        return(
            <div className="box-right-top">
                <div className="box-right-top-conter">
                    <div className="box-right-top-conter-conter">
                        <div className="image"></div>
                        <div className="box-right-top-conter-conter-img-conter">
                            <span className="box-right-top-conter-conter-img-conter-span">本教学周期薪酬</span>
                            <span className="box-right-top-conter-conter-img-conter-span-two">The teaching cycle pay</span>
                        </div>
                        <div className="box-right-top-conter-conter-img-conter-right">
                            <span className="box-right-top-conter-conter-img-conter-right-span">￥</span>
                            <span className="box-right-top-conter-conter-img-conter-right-span-two">{this.props.data.score}</span>
                        </div>
                    </div>
                </div>
</div>
)
}
}
export default Righgtxia;