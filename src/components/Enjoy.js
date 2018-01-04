import React from 'react';

const Enjoy=(props)=>(
    <div className="enjoy">
        <div className="enjoy-header">
            <i className="iconfont" onClick={props.router.goBack}>&#xe86d;</i>
            <span>我要分享</span>
            <span>提交</span>
        </div>
        <form action="#" name="f1" method="post">
            <div>
                <p>创建者</p>
                <input type="text"/>
            </div>
            <div>
                <p>文章标题</p>
                <input type="text"/>
            </div>
            <div>
                <p>原始链接</p>
                <input type="text"/>
            </div>
        </form>
    </div>
)

export default Enjoy;
