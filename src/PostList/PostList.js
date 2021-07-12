import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card } from "@material-ui/core";
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
export default function PostList(props) {
    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {


            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({

        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
            'width': 10
        },
    }))(TableRow);
    const jsonTocsv = (json3) => {
        var json = json3

        var fields = Object.keys(json[0])
        var replacer = function(key, value) { return value === null ? '' : value }
        var csv = json.map(function(row) {
            return fields.map(function(fieldName) {
                return JSON.stringify(row[fieldName], replacer)
            }).join(',')
        })
        csv.unshift(fields.join(',')) // add header column
        csv = csv.join('\r\n');
        return csv
    }

    const useStyles = makeStyles({
        root: {
            minWidth: 200,

            margin: 100
        }
    });
    const classes = useStyles();
    const data = props.postdata && props.postdata.length && jsonTocsv(props.postdata);
    console.log(props.postdata)
    return ( <
        Card className = { classes.root } >
        <

        TableContainer component = { Paper } >
        <
        Table className = { classes.table } >
        <
        TableHead >
        <
        TableRow >
        <
        StyledTableCell align = "right" > Indicator Name < /StyledTableCell> <
        StyledTableCell align = "right" > Jan19(g) < /StyledTableCell> <
        StyledTableCell align = "right" > Feb19(g) < /StyledTableCell> <
        StyledTableCell align = "right" > Mar19(g) < /StyledTableCell>  <
        StyledTableCell align = "right" > Apr19(g) < /StyledTableCell>  <
        StyledTableCell align = "right" > May19(g) < /StyledTableCell> <
        StyledTableCell align = "right" > Jun19(g) < /StyledTableCell> <
        StyledTableCell align = "right" > July19(g) < /StyledTableCell>  <
        StyledTableCell align = "right" > Aug19(g) < /StyledTableCell>  <
        StyledTableCell align = "right" > Sep19(g) < /StyledTableCell> <
        StyledTableCell align = "right" > Oct19(g) < /StyledTableCell> <
        StyledTableCell align = "right" > Nov19(g) < /StyledTableCell>  <
        StyledTableCell align = "right" > Dec19(g) < /StyledTableCell>  <
        StyledTableCell align = "right" > Jan20(g) < /StyledTableCell> <
        StyledTableCell align = "right" > Feb20(g) < /StyledTableCell> <
        StyledTableCell align = "right" > Mar20(g) < /StyledTableCell>  <
        StyledTableCell align = "righ" > Apr20(g) < /StyledTableCell>  <
        StyledTableCell align = "right" > May20(g) < /StyledTableCell> <
        StyledTableCell align = "right" > Jun20(g) < /StyledTableCell> <
        StyledTableCell align = "right" > July20(g) < /StyledTableCell>  <
        StyledTableCell align = "right" > Aug20(g) < /StyledTableCell>  <
        StyledTableCell align = "right" > Sep20(g) < /StyledTableCell> <
        StyledTableCell align = "right" > Oct20(g) < /StyledTableCell> <
        StyledTableCell align = "right" > Nov20(g) < /StyledTableCell>  <
        StyledTableCell align = "right" > Dec20(g) < /StyledTableCell> 

        <
        /
        TableRow > <
        /TableHead> <
        TableBody > {
            props.postdata.map((row) => ( <

                StyledTableRow key = { row["Indicator Name"] } >

                <
                StyledTableCell align = "right" > {
                    row["Indicator Name"]
                } < /StyledTableCell> <
                StyledTableCell align = "right" > {
                    row["Jan-19"]
                } < /StyledTableCell>

                <
                StyledTableCell align = "right" > {
                    row["Feb-19"]
                } < /StyledTableCell> 

                <
                StyledTableCell align = "right" > {
                    row["Mar-19"]
                } < /StyledTableCell>

                <
                StyledTableCell align = "right" > { row["Apr-19"] } < /StyledTableCell> 

                <
                StyledTableCell align = "right" > { row["May-19"] } < /StyledTableCell> 

                <
                StyledTableCell align = "right" > { row["Jun-19"] } < /StyledTableCell> < 
                StyledTableCell align = "right" > { row["Jul-19"] } < /StyledTableCell>

                <
                StyledTableCell align = "right" > { row["Aug-19"] } < /StyledTableCell> <
                StyledTableCell align = "right" > { row["Sep-19"] } < /StyledTableCell>   <
                StyledTableCell align = "right" > { row["Oct-19"] } < /StyledTableCell>  <
                StyledTableCell align = "right" > { row["Nov-19"] } < /StyledTableCell>  <
                StyledTableCell align = "right" > { row["Dec-19"] } < /StyledTableCell> 


                <
                StyledTableCell align = "right" > {
                    row["Jan-20"]
                } < /StyledTableCell>

                <
                StyledTableCell align = "right" > {
                    row["Feb-20"]
                } < /StyledTableCell> 

                <
                StyledTableCell align = "right" > {
                    row["Mar-20"]
                } < /StyledTableCell>

                <
                StyledTableCell align = "right" > { row["Apr-20"] } < /StyledTableCell> 

                <
                StyledTableCell align = "right" > { row["May-20"] } < /StyledTableCell> 

                <
                StyledTableCell align = "right" > { row["Jun-20"] } < /StyledTableCell> < 
                StyledTableCell align = "right" > { row["Jul-20"] } < /StyledTableCell>

                <
                StyledTableCell align = "right" > { row["Aug-20"] } < /StyledTableCell> <
                StyledTableCell align = "right" > { row["Sep-20"] } < /StyledTableCell>   <
                StyledTableCell align = "right" > { row["Oct-20"] } < /StyledTableCell>  <
                StyledTableCell align = "right" > { row["Nov-20"] } < /StyledTableCell>  <
                StyledTableCell align = "right" > { row["Dec-20"] } < /StyledTableCell>

                <
                /
                StyledTableRow >
            ))
        } <
        /TableBody> < /
        Table > <
        /TableContainer>     < /
        Card >
    )

}