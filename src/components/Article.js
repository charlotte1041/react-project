import React,{Component} from 'react';
class Article extends Component{
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
        let dataName=this.props.router.location.query.dataName;
        let url='http://localhost:8001/src/data/article-'+dataName+'.data';
        fetch(url).then((res)=>{
            res.json().then((data)=>{
                if(!this.bMounded) return;
                this.setState({
                    listData:data
                })
            })
        }).catch(()=>{
            console.log('article read error')
        })
    }
    render(){
        let now = this.props.params.aid-1;
        let item=this.state.listData[now];
        return(
            <div className="article">
                <div className="article-header">
                    <i className="iconfont" onClick={this.props.router.goBack}>&#xe8b5;返回</i>
                </div>
                <div className="article-title">
                    <h4>{item?item.title:''}</h4>
                    <p>
                        <span>作者:{item?item.author:''}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>阅读量:{item?item.number:''}</span>
                    </p>
                </div>
                <p className="article-content">
                    {item?item.content:''}
                </p>
            </div>
        )
    }
}
export default Article;
