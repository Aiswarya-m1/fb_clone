import React, { Component } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
export class ModalPopup  extends Component {
    render(){
    return (
        <div>
             <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}
}



import React, { Component } from 'react';
let userArray=[];
export default class AddDocumentComponent extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmpassword:'',
            profilePhoto:'https://stonegatesl.com/wp-content/uploads/2021/01/avatar-300x300.jpg',
            bio:'',
            posts:[]
        }
         imageHandler = (e) =>
        {
            const reader= new FileReader();
            reader.onload = () =>{
                if(reader.readyState === 2){
                    this.setState({profilePhoto:reader.result})
                }
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    }
 
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
// on form submit...
handleFormSubmit(e) {
    e.preventDefault()
    userArray.push(this.state);  
   localStorage.setItem('document',JSON.stringify(userArray));
   console.log(JSON.parse(localStorage.getItem("document")));
}
 
// React Life Cycle
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));
 
    if (localStorage.getItem('document')) {
        this.setState({
            title: this.documentData.title,
           description: this.documentData.description,
           price: this.documentData.price
    })
} else {
    this.setState({
        title: '',
        description: '',
        price: ''
    })
}
}
 
render() {
    const {profilePhoto} = this.state;
    return (
        <div className="container">
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="title" className="form-control" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="text" name="description" className="form-control" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="number" name="price" className="form-control" value={this.state.password} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="number" name="price" className="form-control" value={this.state.confirmpassword} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Add Profile Picture</label>
                    <img src={profilePhoto} alt="" id="img" className="img" />
                    <input type="file" name="img-upload" id="input" accept="image/*" onChange={this.imageHandler}></input>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        </div>
    )
}
}


---

import React, { Component } from 'react'
import logo  from './images/logo.svg';

import './signup.css';
let userArray=[];
export class Signup extends Component{
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmpassword:'',
            profilePhoto:'https://stonegatesl.com/wp-content/uploads/2021/01/avatar-300x300.jpg',
            bio:'',
            posts:[]
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
        }
    
 
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
// on form submit...
handleFormSubmit(e) {
    e.preventDefault()
    
}
 
// React Life Cycle
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));
 
    if (localStorage.getItem('document')) {
        this.setState({
            title: this.documentData.title,
           description: this.documentData.description,
           price: this.documentData.price
    })
} else {
    this.setState({
        title: '',
        description: '',
        price: ''
    })
}
}
 
    render(){
        const {profilePhoto} = this.state  
    return (
        // const register=useSelector(state.allProducts.register)
        // const dispatch=useDispatch()
        // const 
      
        <div className="signup">
           <img src={logo} alt="Facebook_logo" className="img"/>
            <form onSubmit={this.handleFormSubmit}> 
            <h1>Sign up</h1>
            <h2>Its quick and easy</h2>
                <label>Name</label>
                <input type="text"  value={this.state.name}  name="name" onChange={this.handleChange}   ></input><br/>
               
                <label>Email</label>
                <input type="text" name="description" value={this.state.email} onChange={this.handleChange} ></input><br/>
               
     
  
  
              
                <label>Password</label>
                <input type="password" name="price"  value={this.state.password} onChange={this.handleChange} ></input><br/>
                <label>Confirm Password</label>
                <input type="password"  name="price"  value={this.state.confirmpassword} onChange={this.handleChange} ></input><br/>
               
                <label>Image</label>
                
                <input type="file"  name="img-upload" onChange={this.imageHandler} ></input><br/>
                <img src={profilePhoto} alt="" id="img" className="img" /><br/>
                <button  id="sbmt" type="submit">Submit</button>
            </form>
          
           
        </div>
    )
}}


