import React from 'react';
import {Link} from 'react-router';

const Reg=(props)=>(
    <div>
        <div className="reg-header">
            <i className="iconfont" onClick={props.router.goBack}>&#xe8b5;返回</i>
        </div>
        <img src="/src/assets/images/bg.jpg" alt="" className="img"/>
        <p className="reg">
            <Link activeClassName="active" to="reg">注册</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link activeClassName="active" to="login">登录</Link>
        </p>
        <form action="#" className="fm2" className="fm2">
            <p>
                帐号：<input type="text" />
            </p>
            <p>
                密码：<input type="text" />
            </p>
            <button className="sub">注册</button>
        </form>
    </div>
)

export default Reg;
