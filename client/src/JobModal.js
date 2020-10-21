import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function JobModal({ job, open, handleClose }) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {`${job.title} - ${job.company}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText 
            id="alert-dialog-slide-description"
            dangerouslySetInnerHTML={{__html: job.description}}
          >
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="primary" onClick={handleClose}>
            Close
          </Button>
          <a 
            href={job.url} 
            style={{textDecoration: "none"}} 
            target="_blank" 
            rel="noopener"
          >
            <Button variant="contained" color="secondary">
              Apply
            </Button>
          </a>
        </DialogActions>
      </Dialog>
    </div>
  );
}