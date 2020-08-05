import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Table } from "reactstrap";
// import RecruitTable from "./index";
import {
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  TableContainer,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
    borderTopWidth: 2,
    borderColor: "black",
    borderStyle: "solid",
    textAlign: "left",
  },
  table: {
    minWidth: 650,
  },
  tableRightBorder: {
    border: 1,
    borderColor: "black",
    borderStyle: "solid",
  },
  ScrollContainer: {
    overflowX: "auto",
  },
  Data: {
    maxWidth: "100vw",
  },
});

function RecruitTable(props) {
  const classes = useStyles();
  const rows = props.rows;

        let values = {
        'NYC': "red",
        'Competent': 'green',
        align: "center",
        };

  return (
    <div className={classes.Data}>
      <div className={classes.ScrollContainer}>
        <TableContainer component={Paper}>
          <Table className={classes.root}>
            <TableHead className={classes.tableRightBorder}>
              <TableRow>
                <th className={classes.tableRightBorder}>Name</th>
                <th className={classes.tableRightBorder}>Linux Challenges</th>
                <th className={classes.tableRightBorder}>Git Exercises</th>
                <th className={classes.tableRightBorder}>Simple Calculator</th>
                <th className={classes.tableRightBorder}>String Calculator</th>
                <th className={classes.tableRightBorder}>Memory Game</th>
                <th className={classes.tableRightBorder}>Node JS</th>
                <th className={classes.tableRightBorder}>File IO</th>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
              
                <th scope="row" className={classes.tableRightBorder}>
                  Recruit1
                </th>
                {rows.map((row,i) => (
                    <td className={classes.tableRightBorder}>
                      <TableRow>
                        <TableCell
                          className={classes.Cell}
                          style={values}
                          size="small"
                          align="left"
                        >
                          Deadline:{row.deadline}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          className={classes.Cell}
                          style={values}
                          size="small"
                        >
                          Completion Date:{row.completion}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          className={classes.Cell}
                          style={values}
                          size="small"
                        >
                          Competency Score:{row.compotency}
                        </TableCell>
                      </TableRow>
                    </td>
                  ))}
              </TableRow>

              <TableRow>
                <th scope="row" className={classes.tableRightBorder}>
                  Recruit2
                </th>
                {rows.map((row,i) => (
                    <td className={classes.tableRightBorder}>
                      <TableRow>
                        <TableCell
                          className={classes.Cell}
                          style={values}
                          size="small"
                        >
                          Deadline:{row.deadline}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={classes.Cell} size="small">
                          Completion Date:{row.completion}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          className={classes.Cell}
                          style={values}
                          size="small"
                        >
                          Competency Score:{row.compotency}
                        </TableCell>
                      </TableRow>
                    </td>
                  ))}
              </TableRow>

              <TableRow>
                <th scope="row" className={classes.tableRightBorder}>
                  Recruit3
                </th>
                {rows.map((row,i) => (
                    <td className={classes.tableRightBorder}>
                      <TableRow>
                        <TableCell
                          className={classes.Cell}
                          style={values}
                          size="small"
                        >
                          Deadline:{row.deadline}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          className={classes.Cell}
                          style={values}
                          size="small"
                        >
                          Completion Date:{row.completion}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          className={classes.Cell}
                          style={values}
                          size="small"
                        >
                          Competency Score:{row.compotency}
                        </TableCell>
                      </TableRow>
                    </td>
                  ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default RecruitTable;
