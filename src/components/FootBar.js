import React,{Component} from 'react';
import {Link} from 'react-router';
class FootBar extends Component{
    render(){
        return(
            <footer>
                <Link to="home" activeClassName="active">
                    <i className="iconfont">&#x3451;</i>
                    <span>阅读</span>
                </Link>
                <Link to="message" activeClassName="active">
                    <i className="iconfont">&#xe723;</i>
                    <span>消息</span>
                </Link>
                <Link to="enjoy" activeClassName="active">
                    <i className="iconfont">&#xf018b;</i>
                </Link>
                <Link to="search" activeClassName="active">
                    <i className="iconfont">&#xf017c;</i>
                    <span>发现</span>
                </Link>
                <Link to="user" activeClassName="active">
                    <i className="iconfont">&#xf00f3;</i>
                    <span>我的</span>
                </Link>
    </footer>
        )
    }
}

export default FootBar;