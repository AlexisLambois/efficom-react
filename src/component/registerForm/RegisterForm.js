import React from "react";

export default class RegisterForm extends React.Component {
    render() {
        return (
            <form>
                <div className="form-group row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="staticEmail"
                               placeholder="email@example.com"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                    </div>
                </div>
            </form>
        );
    }
}
