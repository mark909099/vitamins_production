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
Vitamin B9, also called folate or folic acid, help's the body convert food into glucose, which is used to produce energy.
Folic acid is crucial for proper brain function and plays an important role in mental and emotional health.
</Typography>

</div>
    )
}