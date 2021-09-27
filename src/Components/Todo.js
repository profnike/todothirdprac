 
 
 import React,{Component} from 'react';

 class Tasks extends Component {
    constructor(props){
      let newVal;
      super(props)
      this.state={
        action:"",
        actionarr:[],
        newinput:"",
        style:{display:"none"},
        actionindex:""
        
       }
  
    }
    
     handleaction = (e) =>{
      e.preventDefault()
      let allaction=this.state.actionarr.slice()
      allaction.push(this.state.action)
      this.setState({
        actionarr:allaction,
        action:"",
        value:"edit",
        actionindex:""
       
      })
    }
    deleteaction=(actionindex) =>{
     
     let actionremain= this.state.actionarr.filter((val,index) =>{
        return actionindex!==index
      })
      this.setState({
        actionarr:actionremain
      })
    }
    clearaction= ()=>{
      this.setState({
        actionarr:[]
      })
    }
   
    
     
    editaction = (e,vals,actionindex) =>{
     
      let style= {display:"flex"}
      let actionremain= this.state.actionarr.filter((val,index) =>{
       let red=this.state.actionarr.find((val,index) =>{
        
          return actionindex===index
       })
       console.log(red)
       let actionremainer= this.state.actionarr.filter((val,index) =>{
        console.log(index)
         console.log(actionindex)
         return actionindex!==index
       })
       if(actionindex===index){
         this.setState({
           style:{display:"flex"},
           value:"edit",
           actionindex:actionindex
         })
        // console.log(this.state.style.display)
        this.setState({
       
         // actionarr:actionremainer,
          //action:vals
          newinput:vals,
          
       })
      }
      
        console.log(val)
        console.log(vals)
        return actionindex!==index
       
        
      })
   
    
     
    
    }
    updateaction=(e) =>{
      console.log(this.state.act)
      let actionremainera= this.state.actionarr.find((val,index) =>{

        return this.state.actionindex===index
      }) 
      console.log(actionremainera)

      let newest =this.state.newinput
         this.state.actionarr.splice(this.state.actionindex,1,newest)
         this.setState({
          style:{display:"none"},
          
        })
    }


    
    
    render(){
     
      console.log(this.state.action )
      console.log(this.state.actionarr)
      
    return (
 
<div className="outer">
    <div className="inner">
        <div>
        <h1>My To-do List</h1>
      
      <label for="task"><p>add a new task</p>  <img src="https://www.mcicon.com/wp-content/uploads/2020/12/Education_Pen_1-copy-13.jpg "/></label>
        <div><input type="text" id="task" onChange={(e)=>{this.setState({action:e.target.value, style:{display:"none"}})}} value={this.state.action}></input>
        <button id="addsign" onClick={this.handleaction}>+</button>
        
        <div className="editarea">
        <input type="text" id="updateinput" onChange={(e)=>{this.setState({newinput:e.target.value})}} value={this.state.newinput} style={this.state.style}></input>
        
        <button style={this.state.style} className="update" onClick={(e) => this.updateaction(e)}>update</button>
        </div>
        </div>
        
       
       
       
       <div className="list">
          {this.state.actionarr.map((vals,actionindex) =>{
            return <div className="add">
            <img src="https://thumbs.dreamstime.com/b/right-arrow-png-icon-left-image-flat-application-web-set-vector-isolated-182083333.jpg"/>
    <       p id="inputtext">{vals}</p>
    <div className="butons">

                <button className="remove" onClick={(e) => this.deleteaction(actionindex)}>remove</button>
                <button className="edit" onClick={(e) => this.editaction(e,vals,actionindex)} >edit</button>
                </div>
               

            </div>
           
          })}
         
        
    </div>
    </div>
    <div>
    <p id="count">You have {this.state.actionarr.length} task(s) to do</p>
    <button id="clear" onClick={this.clearaction}>clear all</button>
    </div>
    </div>
    
</div>
     )
 }
}
 export default Tasks;