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
<ul>
    <li>
    Sardines
    </li>
    <li>
    Beef
    </li>
    <li>
    Salmon
    </li>
    <li>
    Dairy products
    </li>
    <li>
    Egg
    </li>
</ul>
</Typography>
</div>
    )
}