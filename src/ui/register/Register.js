import React from 'react'
import RegisterForm from "../../component/registerForm/RegisterForm";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Register extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <RegisterForm/>
      </div>
    )
  }
}
