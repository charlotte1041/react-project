import React,{Component} from 'react';
import {Link} from 'react-router';
import {date} from '../filters'
class SubscribeList extends Component{
    render(){
        let {listData,dataName}=this.props;
        return(
            <ul className="subscribe_list">
                {
                    listData.map((item)=>{
                        return(
                            <li key={item.id}>
                                <Link to={{
                                  pathname:"article/"+item.id,
                                  query:{dataName:dataName}
                                }}>{item.title}</Link>
                                <p>
                                    <i className="iconfont">&#xf01b8;</i>{item.acc}
                                    &nbsp;&nbsp;
                                    <i className="iconfont">&#xf01c7;</i>{item.comment}
                                    &nbsp;&nbsp;
                                    <i className="iconfont">&#x3451;</i>{item.collect}
                                    &nbsp;&nbsp;
                                    <i className="iconfont">&#xe64d;</i>{date(item.time)}
                                </p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default SubscribeList;

