import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop:'2rem'
  },
  summury: {
    backgroundColor:'#e9ecef',
  },
  details: {
    backgroundColor:'#f8f9fa',
  },
  heading: {
    [theme.breakpoints.up('xs')]: {
        fontSize:'1.5rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize:'1.75rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize:'2rem',
    },
  },
  text: {
    [theme.breakpoints.up('xs')]: {
        fontSize:'1.3rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize:'1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize:'1.8rem',
    }, 
  },
}));

export default function QuestionsAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          className={classes.summury}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What are vitamins?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.text}>
          Vitamins are essential nutrients which enable your body to work properly and to stay healthy.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.summury}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Why are vitamins important?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.text}>
          Vitamins perform hundreds of roles in the body. They help shore up bones, heal wounds, and bolster your immune system. They also convert food into energy, and repair cellular damage.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.summury}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Where do I get vitamins?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.text}>
          Most vitamins need to come from food because the body either does not produce them or produces very little.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}