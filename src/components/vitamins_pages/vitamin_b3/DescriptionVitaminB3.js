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
Having enough niacin, or vitamin B3, in the body is important for general good health. As a treatment, higher amounts of niacin can improve cholesterol levels.
</Typography>

</div>
    )
}