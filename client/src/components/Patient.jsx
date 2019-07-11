import React, { Component } from "react"
import axios from "axios"
import {Redirect, Link} from "react-router-dom"

export default class Doctors extends Component {
  state = {
    patient: [],
    doctor: {},
    redirect: false
  }
  async componentDidMount() {
    let data = await axios.get(`http://localhost:3000/doctors/${this.props.match.params.id}/patients/${this.props.match.params.patient_id}`)
    console.log(data)
    this.setState({
      patient: data.data.patient,
      doctor: data.data.doctor
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    let data = await axios.delete(`http://localhost:3000/doctors/${this.props.match.params.id}/patients/${this.props.match.params.patient_id}`)
    this.setState({
      redirect: true
    })
  }
  render() {
    let pat = this.state.patient
    let doc = this.state.doctor
    if(this.state.redirect){
    return <Redirect to = {`/doctors/${doc.id}`}></Redirect>
    }
    return <div>
      <h1>{`${pat.first_name} ${pat.last_name}`}</h1>
      <p>DoB: {pat.born_on}</p>
      <p>{`Diagnosis: ${pat.diagnosis}`}</p>
      <Link to = {`/doctors/${this.props.match.params.id}`}>Return to All Patients</Link>
      <button onClick = {this.handleSubmit}>Delete This Patient</button>
    </div>
  }
}
