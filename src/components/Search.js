import React from 'react';

const Search=()=>(
    <div className="search">
        <div className="search-header">
            <div>
                <i className="iconfont">&#xf017c;</i>
                <input type="text" className="input" defaultValue="搜索感兴趣的独家号、文章、标签"/>
            </div>
        </div>
        <div>
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <img src="/src/assets/images/banner2.jpg" alt="..."/>
                    </div>
                    <div className="item">
                        <img src="/src/assets/images/banner2.jpg" alt="..."/>
                    </div>
                    <div className="item">
                        <img src="/src/assets/images/banner2.jpg" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
        <ul className="search_list">
            <li>
                <i className="iconfont">&#xe897;</i>
                <a href="javascript:;">热门文章</a>
            </li>
            <li>
                <i className="iconfont">&#xe87d;</i>
                <a href="javascript:;">热门独家号</a>
            </li>
            <li>
                <i className="iconfont">&#xe78c;</i>
                <a href="javascript:;">活动</a>
            </li>
            <li>
                <i className="iconfont">&#x3451;</i>
                <a href="javascript:;">文章标签</a>
            </li>
        </ul>
        <ul className="search_info">
            <li>
                <img src="/src/assets/images/author2.jpg" alt=""/>
                <div className="center">
                    <h5>谷歌开发者</h5>
                    <p>
                        <span>60分享</span>&nbsp;&nbsp;
                        <span>458订阅者</span>
                    </p>
                </div>
                <i className="iconfont">&#xf018b;</i>
            </li>
            <li>
                <img src="/src/assets/images/author2.jpg" alt=""/>
                <div className="center">
                    <h5>谷歌开发者</h5>
                    <p>
                        <span>60分享</span>&nbsp;&nbsp;
                        <span>458订阅者</span>
                    </p>
                </div>
                <i className="iconfont">&#xf018b;</i>
            </li>
            <li>
                <img src="/src/assets/images/author2.jpg" alt=""/>
                <div className="center">
                    <h5>谷歌开发者</h5>
                    <p>
                        <span>60分享</span>&nbsp;&nbsp;
                        <span>458订阅者</span>
                    </p>
                </div>
                <i className="iconfont">&#xf018b;</i>
            </li>
        </ul>
    </div>
)

export default Search;
