
import React, { Component } from 'react'

import { Redirect } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route} from "react-router-dom";
import Login from './Login';
import logo  from './images/logo.svg';
import './signup.css';
let userArray=[];
export class Signup extends Component{
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.formValidation = this.formValidation.bind(this);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmpassword:'',
            profilePhoto:'https://stonegatesl.com/wp-content/uploads/2021/01/avatar-300x300.jpg',
            pic:'https://stonegatesl.com/wp-content/uploads/2021/01/avatar-300x300.jpg',
        }}
         imageHandler  =(e) =>
        {
            const reader= new FileReader();
            reader.onload = () =>{
                if(reader.readyState === 2){
                    this.setState({profilePhoto:reader.result})
                }
            }
            reader.readAsDataURL(e.target.files[0]);
            const image = e.target.files[0];
          
           
        }
    
 
       


 
 
         formValidation = () => {
            const emailRegex = /\S+@\S+\.\S+/;
            const pasreg=/^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()~¥=_+}{":;'?/>.<,`\-\|\[\]]{6,50}$/
          let isvalid=true;
          console.log(this.state.name);
          if (this.state.name==""||this.state.name==undefined) {
          
            alert("Please fill Name ");
      
            isvalid=false;
            return false;
          }
          if (this.state.email==undefined||this.state.email=="") {
          
            alert("Please fill Email ");
      
            isvalid=false;
            return false;
          }
          if (!emailRegex.test(this.state.email)) {
            // usernameerr.usernotvalid="Email not valid";
            alert("Email not valid");
            isvalid=false;
            return false;
          } 
          if (this.state.password==undefined||this.state.password=="") {
           
            alert("Please fill Password ");
      
            isvalid=false;
            return false;
          }
          if (!pasreg.test(this.state.password)) {
            // usernameerr.usernotvalid="Email not valid";
            alert("password not valid");
            isvalid=false;
            return false;
          } 
          if (this.state.confirmpassword==""||this.state.confirmpassword==undefined) {
           
            alert("Please fill confirmpassword ");
      
            isvalid=false;
            return false;
          }
        
          
          if (this.state.password!=this.state.confirmpassword) {
            // usernameerr.usernotmatch="Email not matching ";
            alert("Password not matching");
      
            isvalid=false;
            return false;
          }
         
          if (this.state.profilePhoto==this.state.pic) {
           
            alert("Please select image ");
           
            isvalid=false;
            return false;
          } 

          var vali=false;
          var arr1=JSON.parse(localStorage.getItem("document"));
if(arr1!=null){
   for(var i=0;i<arr1.length;i++){
       if(arr1[i].email==this.state.email){
           vali=true;
           break;
       }}
       if(vali==true){
        alert("Email already exists");
        isvalid=false;
    return false;
       }}
        
        return isvalid;
        };
         
        handleChange= (e)=> {
            this.setState({[e.target.name]:e.target.value});
        }
         Redir=()=>{
            this.props. history.push('/Login');
          
           }

        handleFormSubmit(e) {
            e.preventDefault()
            const isvalid=this.formValidation();
   console.log(isvalid);
            if(isvalid){
            var arr=JSON.parse(localStorage.getItem("document"));
if(arr!=null){
  arr.push(this.state);  
            
  localStorage.setItem('document',JSON.stringify(arr));
  
}else{
  userArray.push(this.state);  
            
           localStorage.setItem('document',JSON.stringify(userArray));
          
}
this.Redir();
        }
    
    }

        componentDidMount() {
            this.documentData = JSON.parse(localStorage.getItem('document'));
         
            if (localStorage.getItem('document')) {
                this.setState({
                    name: this.documentData.name,
                    email: this.documentData.email,
                    password: this.documentData.password
            })
        } else {
            this.setState({
                name: '',
                email: '',
                password: '', 
            })
        }
        }
         
    render(){
        const {profilePhoto} = this.state  
    return (
      
      
        <div className="signup">
<Router>
     
        
        
     <Switch>
    
       <Route path="/Login"  ><Login/></Route>
        
     </Switch>
  
 </Router>
<img src={logo} style={{width:"250px",height:"60px",marginTop:"10px"}}/>
            <h1>Sign up</h1>
            <h2>Its quick and easy</h2>
            <form onSubmit={this.handleFormSubmit}> 
            <label>Name</label>
                <input type="text"  value={this.state.name}  name="name" onChange={this.handleChange}   ></input><br/>
               
                <label>Email</label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} ></input><br/>
               
     
  
  
              
                <label>Password</label>
                <input type="password" name="password"  value={this.state.password} onChange={this.handleChange} ></input><br/>
                <label>Confirm Password</label>
                <input type="password"  name="confirmpassword"  value={this.state.confirmpassword} onChange={this.handleChange} ></input><br/>
               
  
  
              
             
                <label>Image</label>
                
                <input type="file"  name="profilePhoto" onChange={this.imageHandler} ></input><br/>
                <img src={profilePhoto} style={{width:"250px",height:"40px",marginTop:"10px"}} alt="" id="img" className="img" /><br/>
                <button  id="sbmt" type="submit" >Sign Up</button>
                <p>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. </p>
                <p>  You may receive SMS notifications from us and can opt out at any time.</p>
            </form>
          
           
        </div>
    )
}}
