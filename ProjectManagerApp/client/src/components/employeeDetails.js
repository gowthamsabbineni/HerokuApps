import React,{Component} from 'react'
import axios from 'axios';
//import {Redirect} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class employeeDetails extends Component{
    state = {
        employee:{
            firstname: '',
            lastname: '',
            image:'',
            employeeid:'',
            email: '',
            password: '',
            joineddate: new Date(),
            role: 'developer',
            status: 'active',
            address: {
                location:'',
                flatnumber: '',
                city: '',
                zipcode: '',
                state: '',
                country:''
            }
        }
    }
    componentDidMount =(e)=>{
        console.log(this.props);
        axios.get('http://localhost:8080/employees/'+this.props.match.params.id)
        .then(resp=>{
            console.log('employee details',resp.data);
            resp.data.joineddate = new Date(resp.data.joineddate);
            this.setState({
                employee : resp.data,
            })
        })
    }
    render(){
        return(
            <div className="container">
                <h3>Employee Details</h3>
                <form>
                    <fieldset disabled>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>First Name:</label>
                            <input id="firstname" className="form-control" type="text" value={this.state.employee.firstname}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Last Name:</label>
                            <input id="lastname" className="form-control" type="text" value={this.state.employee.lastname}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Email Id</label>
                            <input id="email" className="form-control" type="text" value={this.state.employee.email}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Password:</label>
                            <input id="password" className="form-control" type="password"  value={this.state.employee.password}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Status</label>
                            <select id="status" className="form-control"  value={this.state.employee.status}>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="terminated">Terminated</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                        <label>Role:</label>
                            <select id="role" className="form-control"  value={this.state.employee.role}>
                                <option value="admin">Admin</option>
                                <option value="manager">Manager</option>
                                <option value="developer">Developer</option>
                                <option value="tester">Tester</option>
                            </select>
                        </div>
                    </div>
                        <div className="form-group">
                            <label className="datepickerlabel">Joined Date: </label>
                            <DatePicker id="joineddate" className="form-control" selected={this.state.employee.joineddate} />
                        </div>
                    <h4>Address</h4>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Location:</label>
                            <input id="location" className="form-control" type="text" value={this.state.employee.address.location}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Flat Number:</label>
                            <input id="flatnumber" className="form-control" type="text"  value={this.state.employee.address.flatnumber}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label>City</label>
                            <input id="city" className="form-control" type="text"  value={this.state.employee.address.city}/>
                        </div>
                        <div className="form-group col-md-3">
                            <label>Zipcode</label>
                            <input id="zipcode" className="form-control" type="text"  value={this.state.employee.address.zipcode}/>
                        </div>
                        <div className="form-group col-md-3">
                            <label>State</label>
                            <input id="state" className="form-control" type="text"  value={this.state.employee.address.state}/>
                        </div>
                        <div className="form-group col-md-3">
                            <label>Country</label>
                            <input id="country" className="form-control" type="text" value={this.state.employee.address.country}/>
                        </div>
                    </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default employeeDetails;