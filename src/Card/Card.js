import React from "react";
import "./Card.css";
import { Line } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
export default function Graph(props) {



    let k = Object.keys(props.item);
    let v = Object.values(props.item);
    k = k.slice(2)
    v = v.slice(2)
    v = v.map(item => {
        if (item.includes("%")) {
            const x = item.replace("%", "");
            return parseFloat(x);
        }

        return item;
    })

    const useStyles = makeStyles({
        root: {
            width: 800,
            margin: 20
        }
    });
    const data = {
        labels: k,
        datasets: [{
            label: props.item["Indicator Name"],
            data: v,
            fill: false,

            borderColor: 'rgba(75,192,192,1)',

            backgroundColor: 'rgba(75,192,192,1)',

            borderWidth: 2,
        }, ],
    };

    const options = {
        legend: {
            display: true,
            position: 'right'
        },


        scales: {
            title: {
                display: true,
                text: props.item["Indicator Name"],
                fontSize: 20
            },
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
            }, ],
        },
    };
    const classes = useStyles();
    return ( <

        div className = "container2" >
        <
        Card className = { classes.root } >
        <
        Line data = { data }
        options = { options }
        />   < /
        Card >
        <
        /
        div >
    );
}