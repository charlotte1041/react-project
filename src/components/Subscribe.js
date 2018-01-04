import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import SubscribeList from './SubscribeList';

class Subscribe extends Component{
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
        let url='http://localhost:8001/src/data/subscribelist.data';
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
            console.log('subscribelist read error')
        })
    }
    render(){
        return(
            <div>
                <div className="choice-header">
                    <div className="choice">
                        <Link activeClassName="active" to="home">精选</Link>
                    </div>
                    <div className="subscribe">
                        <Link activeClassName="active" to="subscribe">订阅</Link>
                    </div>
                </div>
                <SubscribeList listData={this.state.listData} dataName="subscribe"/>
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
)(Subscribe);
