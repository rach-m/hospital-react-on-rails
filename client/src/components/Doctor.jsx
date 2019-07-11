import React, {Component} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
export default class Doctor extends Component{
  state = {
    doctor: {},
    patients: []
  }

  async componentDidMount(){
    let data = await axios.get(`http://localhost:3000/doctors/${this.props.match.params.id}/patients`)
    this.setState({
      doctor: data.data.doctor,
      patients: data.data.patients
    })
    console.log(data)
  }

  render(){
    let doctor = this.state.doctor
    let patients = this.state.patients
    return(
      <div style = {{textAlign: "center"}}>
        <h1>{`Dr. ${doctor.first_name} ${doctor.last_name}`}</h1>
        <h3>{doctor.specialty}</h3>
        <h3>{doctor.zip_code}</h3>

        <h4>Patients:</h4>
        {patients.map(pat => {
          return (
            <div>
              <h5><Link to = {`/doctors/${this.props.match.params.id}/patients/${pat.id}`}>{`${pat.first_name} ${pat.last_name}`}</Link></h5>
            </div>
          )
        })}

        <Link to = "/">Back to all Doctors</Link>
      </div>


    )
  }
}
