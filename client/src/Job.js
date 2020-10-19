import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    margin: "15px 0",
    padding: "10px 15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f2f3ee",
    color: "#6d6e71",

    "&:hover": {
      cursor: "pointer",
      color: "#666666"
    }
  }
}));

export default function Job({ job, onClick }) {
  const classes = useStyles();
  return (
    <Paper onClick={onClick} className={classes.root}>
      <div>
        <Typography variant="h6" component="h2">{job.title}</Typography>
        <Typography variant="subtitle2">{job.company}</Typography>
        <Typography>{job.location}</Typography>
      </div>
      <div>
        <Typography>{job.created_at.split(" ").slice(0, 3).join(" ")}</Typography>
      </div>
    </Paper>
  )
}