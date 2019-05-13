import React from "react";

export default class RegisterForm extends React.Component {
    render() {
        return (
            <form>
                <label>
                    Name:
                    <input type="text" name="name"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}
