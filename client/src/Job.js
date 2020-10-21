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
  },
  logo: {
    width: "60px",
    maxHeight: "60px",
    paddingRight: "15px"
  },
  mainText: {
    flex: "1"
  }
}));

export default function Job({ job, onClick }) {
  const classes = useStyles();
  return (
    <Paper onClick={onClick} className={classes.root}>
      <div>
        {job.company_logo ? 
        <img className={classes.logo} src={job.company_logo} alt={job.company} /> : 
        <img className={classes.logo} src="./img/default-logo.png" alt="default logo" />}
      </div>
      <div className={classes.mainText}>
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