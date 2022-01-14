import React, { useState } from 'react';

const MoreForm = (props) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        conPassword: ""
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const nameValid = (str) => {
        return str.length >= 3;
    }

    const emailValid = (str) => {
        return str.length >= 5;
    }

    const pwValid = (str) => {
        return str.length >= 8;
    }

    const pwMatch = (conPassword) => {
        if (conPassword == form.password){
            return true;
        }
    }

    const lengthValidator = (input) => {
        if(input.length > 2){
            return true;
        } else {
            return false;
        }
    }

    const allValid = (inputs) => {
        return lengthValidator(inputs.firstName)
        && lengthValidator(inputs.lastName)
        && lengthValidator(inputs.email)
        && lengthValidator(inputs.password)
        && lengthValidator(inputs.conPassword)
    }

    

    return (
        <div>
            <form>
                <div>
                    <h2>Validations</h2>

                    {!nameValid(form.firstName) && form.firstName.length > 0 && <span style={{color:"red"}}>First Name must be 3 characters long</span>}
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input name="firstName" type="text" onChange={onChangeHandler} />
                    </div>

                    {!nameValid(form.lastName) && form.lastName.length > 0 && <span style={{color:"red"}}>Last Name must be 3 characters long</span>}
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input name="lastName" type="text" onChange={onChangeHandler} />
                    </div>

                    {!emailValid(form.email) && form.email.length > 0 && <span style={{color:"red"}}>Email must be 5 characters long</span>}
                    <div>
                        <label htmlFor="email">Email</label>
                        <input name="email" type="text" onChange={onChangeHandler} />
                    </div>

                    {!pwValid(form.password) && form.password.length > 0 && <span style={{color:"red"}} >Password must be 8 characters long</span>}
                    <div>
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" onChange={onChangeHandler} />
                    </div>

                    {!pwValid(form.conPassword) && form.conPassword.length > 0 && <span style={{color:"red"}}>Password must be 8 characters long</span>}
                    {!pwMatch(form.conPassword) && form.conPassword.length > 0 && <span style={{color:"red"}}>Passwords must match</span>}
                    <div>
                        <label htmlFor="conPassword">Confirm Password</label>
                        <input name="conPassword" type="password" onChange={onChangeHandler} />
                    </div>

                    {
                        allValid(form)
                        ? <input type="submit" value="Create"></input>
                        : <input type="submit" value="Create" disabled></input>
                    }

                </div>
            </form>
            <div>
                <p>First Name : {form.firstName} </p>
                <p>Last Name :{form.lastName} </p>
                <p>Email : {form.email}</p>
                <p>Password : {form.password}</p>
                <p>Confirm Password : {form.conPassword} </p>
            </div>

        </div>
    )
}

export default MoreForm;