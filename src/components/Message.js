import React from 'react';

const Message=()=>(
    <div className="message">
        <div className="message-header">消息</div>
        <ul className="message_list">
            <li>
                <i className="iconfont">&#xe897;</i>&nbsp;&nbsp;
                <span>订阅消息</span>
                <i className="iconfont">&#xe65f;</i>
            </li>
            <li>
                <i className="iconfont">&#xe8b9;</i>&nbsp;&nbsp;
                <span>评论消息</span>
                <i className="iconfont">&#xe65f;</i>
            </li>
            <li>
                <i className="iconfont">&#xe87d;</i>&nbsp;&nbsp;
                <span>关注消息</span>
                <i className="iconfont">&#xe65f;</i>
            </li>
            <li>
                <i className="iconfont">&#xe888;</i>&nbsp;&nbsp;
                <span>系统消息</span>
                <i className="iconfont">&#xe65f;</i>
            </li>
            <li>
                <i className="iconfont">&#xe8c6;</i>&nbsp;&nbsp;
                <span>赞</span>
                <i className="iconfont">&#xe65f;</i>
            </li>
        </ul>
    </div>
)

export default Message;