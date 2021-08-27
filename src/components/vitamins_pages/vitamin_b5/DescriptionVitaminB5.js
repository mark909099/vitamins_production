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

export default function VitaminDescription() {
    const classes = useStyles();
    return (
<div>

<Typography className={classes.paragraph} paragraph='true' variant='body1'>
Vitamin B5, also called pantothenic acid, is one of the most important vitamins for human life.
It’s necessary for making blood cells, and it helps you convert the food you eat into energy.
</Typography>

</div>
    )
}