import React from 'react';
const Banner=()=>(
    <div className="banner">
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="item active">
                    <img src="/src/assets/images/banner1.jpg" alt="..."/>
                </div>
                <div className="item">
                    <img src="/src/assets/images/banner1.jpg" alt="..."/>
                </div>
                <div className="item">
                    <img src="/src/assets/images/banner1.jpg" alt="..."/>
                </div>
            </div>
        </div>
    </div>
)
export default Banner;