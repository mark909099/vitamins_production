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

export default function VitaminSources() {
    const classes = useStyles();
    return (
<div>
<Typography className={classes.paragraph} paragraph='true' variant='body1'>
Preformed vitamin A:
<ul>
    <li>
    Meat
    </li>
    <li>
    Fish
    </li>
    <li>
    Dairy products
    </li>
</ul>
Provitamin A:
<ul>
    <li>
    Leafy green vegetables
    </li>
    <li>
    Orange and yellow vegetables
    </li>
    <li>
    Tomato products
    </li>
</ul>
</Typography>
</div>
    )
}