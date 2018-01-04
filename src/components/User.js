import React from 'react';
import {Link} from 'react-router';

const User=()=>(
    <div className="user">
        <div className="user_header">
            <p className="p1">我的</p>
            <img src="/src/assets/images/touxiang.jpg" alt="" className="mypic"/>
            <p className="p2">
                <Link activeClassName="active" to="reg">注册</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link activeClassName="active" to="login">登录</Link>
            </p>
            <ul>
                <li>分享</li>
                <li>|</li>
                <li>关注</li>
                <li>|</li>
                <li>粉丝</li>
            </ul>
        </div>
        <ul className="user_list">
            <li>
                <i className="iconfont">&#xe89c;</i>&nbsp;&nbsp;
                <span>我的IO币</span>
                <i className="iconfont">&#xe65f;</i>
            </li>
            <li>
                <i className="iconfont">&#xe78c;</i>&nbsp;&nbsp;
                <span>礼物兑换</span>
                <i className="iconfont">&#xe65f;</i>
            </li>
            <li>
                <i className="iconfont">&#x3451;</i>&nbsp;&nbsp;
                <span>我的收藏</span>
                <i className="iconfont">&#xe65f;</i>
            </li>
            <li>
                <i className="iconfont">&#xe64d;</i>&nbsp;&nbsp;
                <span>最近浏览</span>
                <i className="iconfont">&#xe65f;</i>
            </li>
            <li>
                <i className="iconfont">&#xe741;</i>&nbsp;&nbsp;
                <span>意见反馈</span>
                <i className="iconfont">&#xe65f;</i>
            </li>
            <li>
                <i className="iconfont">&#xe6f7;</i>&nbsp;&nbsp;
                <span>合作申请</span>
                <i className="iconfont">&#xe65f;</i>
            </li>
        </ul>
    </div>
)

export default User;
