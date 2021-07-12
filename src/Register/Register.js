import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { withStyles } from '@material-ui/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const RedTextTypography = withStyles({
    root: {
        color: "#FF0000"
    }
})(Typography);
const GreenTextTypography = withStyles({
    root: {
        color: "#00FF00"
    }
})(Typography);
const Register = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const changeValue = (e, type) => {
        const value = e.target.value;
        const nextState = {};
        nextState[type] = value;
        setUser({...user,
            ...nextState

        });
        console.log(user)

    }

    const changeAdmin = (e, type) => {
        const value = e.target.checked;
        const nextState = {};
        nextState[type] = value;
        setUser({...user,
            ...nextState

        });
        console.log(user)

    }
    const submitForm = () => {
        const payload = {
            ...user,
            roles: ["user"]
        }

        if (user.admin) {
            payload.roles.push("admin")
        }
        payload.admin = undefined

        console.log("ffffff", payload)
        axios.post("http://localhost:8080/api/auth/signup", payload).then(res => {
            setError("")
            setSuccess(res.data.message)

        }).catch(err => {
            setSuccess("")
            setError(err.response.message)
        })
    }

    const paperStyle = { padding: 20, height: '80vh', width: 280, margin: "20px auto" }
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
        h2 > Register < /h2> 

        <
        /
        Grid >
        <
        br / >
        <
        TextField label = 'Enter email'
        placeholder = 'Enter email'
        type = 'email'
        onChange = { e => changeValue(e, 'email') }
        fullWidth required / >
        <
        TextField label = 'Username'
        placeholder = 'Enter username'
        onChange = { e => changeValue(e, 'username') }
        fullWidth required / >
        <
        TextField label = 'Password'
        placeholder = 'Enter password'
        type = 'password'
        onChange = { e => changeValue(e, 'password') }
        fullWidth required / >

        <
        FormControlLabel control = { <
            Checkbox
            onChange = { e => changeAdmin(e, 'admin') }
            name = "checkedB"
            color = "primary" /
            >
        }
        label = "Register as Admin" /
        >


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
        fullWidth > Register < /Button> <
        RedTextTypography key = { 3 }
        variant = "h6" > { error } <
        /RedTextTypography>

        <

        GreenTextTypography key = { 2 }
        variant = "h6" > { success } <
        /GreenTextTypography> <
        Typography >
        <
        br / >
        <
        br / >

        <
        br / >
        <
        br / >
        <
        /
        Typography > <
        Typography > Already have an account ?
        <
        br / >
        <
        Link to = '/' >
        Sign In <
        /Link>

        <
        /
        Typography >
        <
        /
        Paper > < /
        Grid >
    )
}

export default Register