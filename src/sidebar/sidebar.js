import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Auth from '../Auth';
import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import PublishIcon from '@material-ui/icons/Publish';
import Publish from '../publish/publish';
import Dashboard from '../DashBoard/Dashboard'
import { useHistory } from 'react-router-dom'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function Sidebar() {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [option, setOption] = useState(2);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const history = useHistory();
    const logOff = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("roles");
        history.push("/");
        Auth.signout();
    }
    const isAdmin = () => {
        if (localStorage.getItem("roles").includes("ROLE_ADMIN")) {
            return true;
        }
        return false;
    }
    const handleDrawerClose = () => {
        setOpen(false);
    };
    !Auth.getAuth() && history.push("/")
    return ( <
        div className = { classes.root } >

        <
        CssBaseline / >
        <
        AppBar position = "fixed"
        className = {
            clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })
        } >
        <
        Toolbar >
        <
        IconButton color = "inherit"
        // aria - label = "open drawer"
        onClick = { handleDrawerOpen }
        edge = "start"
        className = { clsx(classes.menuButton, open && classes.hide) } >
        <
        MenuIcon / >
        <
        /IconButton> <
        Typography variant = "h6"
        noWrap >
        Finance Outlook

        <
        /Typography> < /
        Toolbar >
        <
        /AppBar> <
        Drawer className = { classes.drawer }
        variant = "persistent"
        anchor = "left"
        open = { open }
        classes = {
            {
                paper: classes.drawerPaper,
            }
        } >
        <
        div className = { classes.drawerHeader } >
        <
        IconButton onClick = { handleDrawerClose } > { theme.direction === 'ltr' ? < ChevronLeftIcon / > : < ChevronRightIcon / > } <
        /IconButton> < /
        div > <
        Divider / >
        <

        List > {
            isAdmin() && <
            ListItem button onClick = {
                () =>
                setOption(1)
            } > <
            ListItemIcon >
            <
            PublishIcon / >

            <
            /ListItemIcon> <
            ListItemText primary = "Publish" /
            >
            <
            /ListItem> }

            <
            ListItem button onClick = {
                () =>
                setOption(2)
            } >
            <
            ListItemIcon > <
            DashboardIcon / >
            <
            /ListItemIcon >  <
            ListItemText primary = "DashBoard" / >
            <
            /ListItem> <
            ListItem button onClick = {
                () =>
                logOff()
            } > <
            ListItemIcon >

            <
            ExitToAppIcon / >
            <
            /ListItemIcon > <
            ListItemText primary = "Log Off" /
            >
            <
            /ListItem> < /
            List > <
            Divider / >

            <
            /
            Drawer >
            <
            main className = {
                clsx(classes.content, {
                    [classes.contentShift]: open,
                })
            } >
            <
            div className = { classes.drawerHeader }
            />   {
            option === 1 && < Publish / >
        } {
            option === 2 &&
                <
                Dashboard / >
        } < /
        main > < /
        div >
    );
};