import React, { Component } from 'react';

class Demo extends Component {
   
    constructor(props){
        super(props);
        let comments = JSON.parse(localStorage.getItem('data'));
        this.state = {
            comments: comments, item:[],
            txt:""
        };
      }
    remov=(k)=>{
        if(!window.confirm("Are you sure to delete")){
            return;
        }
let curr=this.state.item;
curr.splice(k,1);
this.setState({
    item:curr
})
    }
    textChng=(e)=>{
this.setState({txt:e.target.value})
    }
    addItm=()=>{
        let currval=this.state.item;
        currval.push(this.state.txt);
        this.setState({
            item:currval
        })
        JSON.stringify(localStorage.setItem('data',this.state.item));
    }
    // componentDidMount() {
    //     this.state.item = JSON.parse(localStorage.getItem('data'));
    // }
              
    render() {
        return (
            <div className="contain">
                <input type="text" onChange={this.textChng}></input>
                <button onClick={this.addItm}>click</button>
                <ul>{
                this.state.comments  &&   this.state.comments.map((itm,ky)=>{
                        return(
                            <li>{itm}<button onClick={()=>this.remov(ky)}>delete</button></li>
                        )
                    })
                   
                    }
                  
                </ul>
               
            </div>
        );
    }
}

export default Demo;