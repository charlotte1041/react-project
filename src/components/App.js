import React,{Component} from 'react';
import {connect} from 'react-redux';
import FootBar from './FootBar';
import Loading from './Loading';
class App extends Component{
    componentDidMount(){
        this.props.router.replace('home');
    }
    render(){
        let {bLoading,bFoot,showFoot,hideFoot}=this.props;
        let path=this.props.router.location.pathname;
        if(/home|message|user|search|subscribe/.test(path)){
            setTimeout(()=>{
                showFoot();
            },0)
        }else if(/article|enjoy|error|login|reg/.test(path)){
            setTimeout(()=>{
                hideFoot();
            },0)
        }
        return(
            <div className="app">
                <Loading show={bLoading} />
                {this.props.children}
                {bFoot?<FootBar/>:''}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        bLoading:state.bLoading,
        bFoot:state.bFoot
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        showFoot:()=>{
            dispatch({
                type:'SHOW_FOOT'
            })
        },
        hideFoot:()=>{
            dispatch({
                type:'HIDE_FOOT'
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
