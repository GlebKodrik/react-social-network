import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControl";
import {required} from "../../Healpers/validator/validators";
import {connect} from "react-redux";
import {logIn} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../common/FormsControls/FormsControl.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field type="text" name={"email"} placeholder={"Email"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field type="password" name={"password"} placeholder={"Password"} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/>запомнить
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <button>Register</button>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) =>{
        props.logIn(formData.email , formData.password, formData.rememberMe);
    }
    if(props.isAuth) return <Redirect to="/profile" />

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth
    }

}
export default connect(mapStateToProps,{logIn})(Login)