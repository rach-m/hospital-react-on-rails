import React, {Component} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

export default class Doctors extends Component{
  state = {
    doctors: []
  }
 async componentDidMount(){
    let data = await axios.get("http://localhost:3000/doctors")
    this.setState({
      doctors: data.data
    })
  }
  render(){
    return <div>{this.state.doctors.map(doc => {
      return <h1><Link to= {`/doctors/${doc.id}`}>{`Dr. ${doc.first_name} ${doc.last_name}`}</Link></h1>
    })}
    <Link to = "/patients/new">Create New Patient</Link>
    </div>
  }
}
