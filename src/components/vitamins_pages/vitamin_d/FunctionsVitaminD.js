import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
     } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    paragraph: {
        [theme.breakpoints.up('xs')]: {
        fontSize:'1.25rem',
        },
        [theme.breakpoints.up('md')]: {
        fontSize:'1.5rem',    
        },
    },
}));

export default function VitaminFunctions() {
    const classes = useStyles();
    return (
<div>
<Typography className={classes.paragraph} paragraph='true' variant='body1'>
<ul>
    <li>
    Keep's bones, teeth and muscles healthy.
    </li>
    <li>
    Helps the body absorb calcium.
    </li>
    <li>
    Helps regulate the amount of phosphate in the body.
    </li>
    <li>
    Needed for proper immune system functioning.
    </li>
</ul>
</Typography>


</div>
    )
}