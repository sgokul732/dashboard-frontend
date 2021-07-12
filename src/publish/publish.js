import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import './publish.css';
import { Typography } from '@material-ui/core';
const BASE_URL = 'http://localhost:8080/api/';

class Publish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    };

    changeHandler = event => {
        var uploadFile = event.target.files[0];
        if (this.validateFileSize(event)) {
            this.setState({
                selectedFile: uploadFile
            });

        }
    }
    fileUpload = () => {
        const config = {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        }
        const formData = new FormData()
        formData.append('file', this.state.selectedFile)
        axios.post(BASE_URL + 'upload', formData, config)
            .then(res => {
                toast.success('File uploaded successfully')
            })
            .catch(err => {
                toast.error('File upload failed')
            })

    };

    validateFileSize = (event) => {
        let uploadFile = event.target.files[0];
        let size = 30000;
        let err = '';
        if (uploadFile.size > size) {
            err = uploadFile.type + ' is too large, please select a smaller file\n';
            toast.error(err);
        }
        return true
    };

    render() {
        const btnstyle = { margin: '8px 0' }

        return ( <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-md-6" >
            <
            form method = "post"
            action = "#"
            id = "#" >
            <
            div className = "form-group files" >
            <
            Typography variant = "h6"
            color = "secondary"
            gutterBottom >
            Upload CSV File <
            /Typography>  <
            ToastContainer / >
            <
            input type = "file"
            name = "file"
            className = "form-control"
            onChange = { this.changeHandler }
            /> < /
            div > <
            div className = "col-md-6 pull-right" >
            <
            button width = "100%"
            style = { btnstyle }
            type = "button"
            className = "btn btn-info"
            onClick = { this.fileUpload } > Upload File < /button>


            <
            /
            div > <
            /form> < /
            div > <
            /div> < /
            div >
        );
    }
}
export default Publish;