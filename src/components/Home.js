import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Banner from './Banner';
import HomeList from './HomeList';

class Home extends Component{
    constructor(){
        super();
        this.state={
            listData:[]
        }
        this.bMounded=true;
        this.getData=this.getData.bind(this);
    }
    componentDidMount(){
        this.getData();
    }
    componentWillUnmount(){
        this.bMounded=false;
    }
    getData(){
        let{showLoading,hideLoading}=this.props;
        showLoading();
        let url='http://localhost:8001/src/data/homelist.data';
        fetch(url).then((res)=>{
            res.json().then((data)=>{
                setTimeout(()=>{
                    hideLoading();
                    if(!this.bMounded) return;
                    this.setState({
                        listData:data
                    })
                },500)
            })
        }).catch(()=>{
            console.log('homelist read error')
        })
    }
    render(){
        return(
            <div className="home">
                <div className="choice-header">
                    <div className="choice">
                        <Link activeClassName="active" to="home">精选</Link>
                    </div>
                    <div className="subscribe">
                        <Link activeClassName="active" to="subscribe">订阅</Link>
                    </div>
                </div>
                <Banner/>
                <HomeList listData={this.state.listData} dataName="home"/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{return{}}

const mapDispatchToProps=(dispatch)=>{
    return{
        showLoading:()=>{
            dispatch({
                type:'SHOW_LOADING'
            })
        },
        hideLoading:()=>{
            dispatch({
                type:'HIDE_LOADING'
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);