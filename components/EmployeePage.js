import React from 'react';
import './EmployeePage.css';
import pro from '../images/pro.png';
import {NavLink} from 'react-router-dom';


class EmployeePage extends React.Component{

    render(){
        return(
            <div className="employeehome">
                <div className="EmpHeader">
                    <div className="left">
                    <h1><img id ="logo"src={pro}height="55px"width="55px"alt="*"></img>PRO_GOALS</h1>
                    </div>
                    <div className="right">
                    <NavLink to='/'><button id="Emplogout">LOG OUT</button></NavLink>
                    </div>
                </div>
                <div className="add_goals">
                <div className="add_week_goal">
                    <h1>Add week goals and objectives</h1>
                </div>

                <div >
                    <label id="1">start date:</label><br/>
                    <input className="date1" type="date"placeholder="Set start date" required></input>
                </div>    
                
                <div >
                    <label>end date:</label><br/>
                    <input className="date2" type="date"placeholder="Set start date" required></input>
                </div> 
                <br/>
                <div>
                    <textarea className="text_box">
                        <label>enter text</label>
                    </textarea>
                </div>
                <div>
                    <button id="btn">
                        Add
                    </button>
                </div>
            </div>

                
            </div>
        );
    }
}
export default EmployeePage;