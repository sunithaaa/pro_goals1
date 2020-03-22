import React from 'react';
import './AdminPage.css';
import person from '../images/person.png';
import pro from '../images/pro.png';
import {NavLink} from 'react-router-dom';
//import DatePicker from 'react-date-picker';

class AdminPage extends React.Component{

//   state={
//             EmployeeName:[],
//             EmployeeEmail:[],
//             EmployeePassword:[]
//         }
  

    PopupForm()
    {
        document.getElementById('bg-modal').style.display='flex';
    }

    closePopUp()
    {
        document.getElementById('bg-modal').style.display='none';
    }

    // AddEmployee=(evt)=>{
        
    //     this.setState({
    //         EmployeeName:evt.target.value
    //     });
    //    console.log(this.state.EmployeeName)
    // }

    onChange = date => this.setState({ date })
    render(){
        return(

            <div className="Admin">
                <div className="AdminHeader">
                    <div className="left">
                    <h1><img id ="logo"src={pro}height="55px"width="55px"alt="*"></img>PRO_GOALS</h1>
                    </div>
                    <div className="right">
                    <button id="AddButton" onClick={this.PopupForm}>Add Employee</button>
                    <NavLink to='/'><button id="adminlogout">LOG OUT</button></NavLink>
                    </div>
                </div>

               


                <div id="bg-modal">
                       
                        {/* popup */}
                        <div className="modal-content">
                                <div className="close" onClick={this.closePopUp}>+</div>
                                <img src={person} height="50px" width="50px"alt="Employee"></img>
                        {/* addemployee from */}
                                <form>

                                     {/* employeename */}
                                     <div className="employeename">
                                        <label>Employee Name:</label><br/>
                                        <input className="name" type="text"placeholder="Full Name" required></input>
                                    </div>

                                    {/* employeeemail*/}
                                    <div className="employeeemail">
                                        <label>Employee Email:</label><br/>
                                        <input className="empemail" type="email"placeholder="example@gmail.com" required></input> 
                                    </div>
            
                                    {/* employeepassword */}
                                    <div className="employeepassword">
                                        <label>Password:</label><br/>
                                        <input className="pwd" type="password"placeholder="Set password" required></input>
                                    </div>

                                     {/* addbutton */}
                                    <button className="addemp" >Add</button>

                                </form>
                        </div>

                </div>
            </div>
        );
    }
}
export default AdminPage;