import React from "react";
import './Home.css';
import pro from '../images/pro.png';
import admin from '../images/admin.jpg';
import employee from '../images/employee.png';
import {NavLink} from 'react-router-dom';

class Home extends React.Component{

    state={
        adminId:'Aicumen1Pro',
        adminPassword:'Password',
        idflag:false,
        passwordflag:false,
        flag:false
    }

    handleId=(e)=>{

        var aid=e.target.value;
        if(aid===this.state.adminId){
            this.setState({
            idflag:true
            })
        }
        console.log(this.state.idflag);
    }
    handlePassword=(e)=>{
        var apsw=e.target.value;
        if(apsw===this.state.adminPassword){
            this.setState({
            passwordflag:true
            })
        }
        if(this.state.passwordflag && this.state.idflag){
            this.setState({
                flag:true
            })
        }
        console.log(this.state.passwordflag);
    }

    render(){
        return(

            <div className="container">

                <div className="header">
                    <img id ="logo"src={pro}alt="*"></img>PRO_GOALS
                </div>

                <div className="body">
                    <div className="loginadmin">

                        <div className="icon">
                                <img src={admin}alt="Admin"height="80px"width="80px"></img>
                        </div>
                        <div className="form">
                            <h2>Admin Login</h2>
                            <form>
                                     <div className="id">
                                        <label> ID:</label>
                                        <input className="name" type="text"placeholder="Admin ID" required onChange={this.handleId}></input>
                                    </div>
            
                                    <div className="password">
                                        <label>Password:</label>
                                        <input className="pwd" type="password"placeholder="Password" required onChange={this.handlePassword}></input>
                                    </div>
                                    
                                
                                        <NavLink to='/Admin'><button className="login" >LOG IN</button></NavLink>
                                </form>

                        </div>

                    </div>

                    <div className="loginemployee">

                        <div className="icon">
                        <img src={employee}alt="Admin"height="80px"width="80px"></img>
                        </div>

                        <div className="form">

                        <h2>Employee Login</h2>
                            <form>

                                     {/* employeename */}
                                     <div className="id">
                                        <label> ID:</label>
                                        <input className="name" type="text"placeholder="Employee ID" required></input>
                                    </div>
            
                                    {/* employeepassword */}
                                    <div className="password">
                                        <label>Password:</label>
                                        <input className="pwd" type="password"placeholder="Password" required></input>
                                    </div>

                                     {/* addbutton */}
                                    <NavLink to='/Employee'><button className="login" >LOG IN</button></NavLink>

                                </form>

                        </div>

                    </div>
                </div>

                <footer className="footerdesign">

                </footer>

            </div>
        );
    }
}

export default Home