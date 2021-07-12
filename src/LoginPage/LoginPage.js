import React, { useState } from 'react'

import axios from 'axios'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { Link, useHistory } from 'react-router-dom'
import { withStyles } from '@material-ui/styles';

const RedTextTypography = withStyles({
    root: {
        color: "#FF0000"
    }
})(Typography);
const LoginPage = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const changeValue = (e, type) => {
        const value = e.target.value;
        const nextState = {};
        nextState[type] = value;
        setUser({...user,
            ...nextState

        });

    }
    const history = useHistory();
    const submitForm = () => {

        axios.post("http://localhost:8080/api/auth/signin", user).then(res => {

            const roles = res.data.roles;
            const token = res.data.accessToken;
            localStorage.setItem("token",
                token);
            localStorage.setItem("roles",
                roles);
            history.push("/mainpage");
        }).catch(err => {

            setError("Invalid Credentials!")
        })
    }

    const paperStyle = { padding: 20, height: '60vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    return ( <
        Grid >
        <
        Paper elevation = { 10 }
        style = { paperStyle } >
        <
        Grid align = 'center' >
        <
        Avatar style = { avatarStyle } > < LockOutlinedIcon / > < /Avatar> <
        h2 > Sign In < /h2> 

        <
        /
        Grid >
        <
        br / >
        <
        TextField label = 'Email'
        placeholder = 'Enter email'
        onChange = { e => changeValue(e, 'email') }
        fullWidth required / >
        <
        TextField label = 'Password'
        placeholder = 'Enter password'
        type = 'password'
        onChange = { e => changeValue(e, 'password') }
        fullWidth required / >


        <
        br / >
        <
        br / >
        <
        Button type = 'submit'
        color = 'primary'
        variant = "contained"
        style = { btnstyle }
        onClick = {
            () => submitForm()
        }

        fullWidth > Sign in < /Button> <
        Typography >


        <
        br / >


        <
        RedTextTypography key = { 1 }
        variant = "h6" > { error } <
        /RedTextTypography> <
        br / > <
        br / >
        <
        br / >
        <
        /
        Typography > <
        Typography > New Member ?
        <
        Link to = {
            {
                pathname: '/register'
            }
        } >
        Sign Up <
        /Link> < /
        Typography > <
        /Paper> < /
        Grid >
    )
}

export default LoginPage