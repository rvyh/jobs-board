import React from 'react';
// mobile stepper https://material-ui.com/components/steppers/#mobile-stepper
import { makeStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    margin: "0 auto",
    backgroundColor: "#b5c5c5"
  }
}));

function Pagination(props) {
  const {activeStep, numPages, handleNext, handleBack} = props;
  const classes = useStyles();
  return (
    <MobileStepper
      steps={numPages}
      position="static"
      variant="text"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep + 1 === numPages}
        >
          Next
            <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
  );
}

export default Pagination;