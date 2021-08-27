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
    Needed to metabolize fats, carbohydrates, and protein.
    </li>
    <li>
    Important for healthy pregnancy and fetus development.
    </li>
    <li>
    Helps to regulate signals sent by cells.
    </li>
</ul>
</Typography>


</div>
    )
}