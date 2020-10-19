import React from "react";
import Typography from '@material-ui/core/Typography';
import Job from "./Job";
import JobModal from "./JobModal";
import Pagination from "./Pagination";

export default function Jobs({ jobs }) {
  // modal
  const [open, setOpen] = React.useState(false);
  const [selectedJob, selectJob] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // modal end

  // pagination
  const numJobs = jobs.length;
  const numPages = Math.ceil(numJobs / 50);

  const [activeStep, setActiveStep] = React.useState(0);
  
  // step 0, show 0 - 49
  // step 1, show 50 - 99
  const jobsOnPage = jobs.slice(activeStep * 50, activeStep * 50 + 50);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  // pagination end

  // console.log("job is ", jobs[0]);
  
  return (
    <div className="jobs">
      <JobModal open={open} job={selectedJob} handleClose={handleClose} />
      <Typography variant="h4" component="h1" align="center" color="primary">
        Entry Level Software Jobs
      </Typography>
      <Typography variant="h6" component="p" align="center">
        Found {numJobs} Jobs
      </Typography>
      {
        jobsOnPage.map(
          (job, i) => <Job key={i} job={job} onClick={() => {
            handleClickOpen();
            selectJob(job)
          }} />
        )
      }
      <Pagination 
        activeStep={activeStep} 
        numPages={numPages} 
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </div>
  )
}