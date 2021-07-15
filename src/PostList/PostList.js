import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { CSVLink } from 'react-csv'
import Paper from '@material-ui/core/Paper';
export default

function PostList(props) {
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
            }
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
        csv.unshift(fields.join(',')) //addheadercolumn
        csv = csv.join('\r\n');
        return csv
    }

    const useStyles = makeStyles({
        root: {
            minWidth: 1200,

            margin: 100
        }
    });
    const classes = useStyles();
    const csvdata = props.postdata && props.postdata.length && jsonTocsv(props.postdata);
    const data = props.postdata
    let keys = data.length && Object.keys(data[0])
    keys && keys.splice(0, 1)
    return ( <
            div > {
                csvdata && <
                CSVLink data = {
                    csvdata
                } > Download CSV < /CSVLink>}   <
                TableContainer component = { Paper } >
                <
                Table className = { classes.table } > <
                TableHead > <
                TableRow > {
                    keys && keys.map(ele => <
                        StyledTableCell align = "right" > { ele } < /StyledTableCell>) } </TableRow > <
                        /TableHead><
                        TableBody > {
                            data.map(ele =>
                                <
                                StyledTableRow > {
                                    keys && keys.map(cell => {
                                            const x = ele[cell]
                                            return <StyledTableCell align = "center" > {
                                                    x
                                                } <
                                                /StyledTableCell >} )}

                                            <
                                            /StyledTableRow>
                                        )
                                    } <
                                    /TableBody></Table > < /TableContainer></div >
                                )

                            }