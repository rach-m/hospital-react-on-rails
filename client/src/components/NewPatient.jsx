import React, { Component } from "react"
import axios from "axios"
import { Redirect } from "react-router-dom"

export default class Doctors extends Component {
  state = {
    first_name: "",
    last_name: "",
    born_on: "",
    diagnosis: "",
    doctor_id: "1",
    doctors: []
  }
  async componentDidMount() {
    let data = await axios.get("http://localhost:3000/doctors")
    this.setState({
      doctors: data.data
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    let newPatient = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      born_on: this.state.born_on,
      diagnosis: this.state.diagnosis,
      doctor_id: this.state.doctor_id,
    }
    let data = await axios.post(`http://localhost:3000/doctors/${this.state.doctor_id}/patients`, newPatient)
    console.log(data)
    this.setState({
      redirect: true
    })
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={`/doctors/${this.state.doctor_id}`}></Redirect>
    }
    return <div>
     <h1>Create New Patient</h1>
     <form style={{display: "flex", flexDirection: "column", width: 300}}>
       <label for = "first_name">First Name:</label>
       <input type = "text" name = "first_name" value = {this.state.first_name} onChange = {this.handleChange}></input>
       <br></br>
       <label for = "last_name">Last Name:</label>
       <input type = "text" name = "last_name" value = {this.state.last_name} onChange = {this.handleChange}></input>
       <br></br>
       <label for = "diagnosis">Diagnosis</label>
       <input type = "text" name = "diagnosis" value = {this.state.diagnosis} onChange = {this.handleChange}></input>
       <br></br>
       <label for = "born_on">Birthday</label>
       <input type = "date" name = "born_on" value = {this.state.born_on} onChange = {this.handleChange}></input>
      <br></br>
        <label for="doctor_id">Doctor:</label>
        <select onChange = {this.handleChange} name = "doctor_id">
          {this.state.doctors.map(doc => {
            return <option value={doc.id}>{`Dr. ${doc.first_name} ${doc.last_name}`}</option>
          })}
        </select>
        <br></br>
        <button onClick = {this.handleSubmit}>Create Patient</button>
     </form>
    </div>
  }
}
