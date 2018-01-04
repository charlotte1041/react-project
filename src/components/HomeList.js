import React,{Component} from 'react';
import {Link} from 'react-router';
class HomeList extends Component{
    render(){
        let {listData,dataName}=this.props;
        return(
            <ul className="homelist">
                {
                    listData.map((item)=>{
                        return(
                            <li key={item.id}>
                                <div className="list_left">
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
                                    </p>
                                </div>
                                <div className="list_right">
                                    <div className="author_img">
                                        <img src="/src/assets/images/author.jpg" alt=""/>
                                    </div>
                                    <span>{item.author}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default HomeList;
