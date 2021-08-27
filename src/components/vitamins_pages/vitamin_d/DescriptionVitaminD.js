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
Vitamin D is a fat-soluble vitamin that is naturally present in a few foods, added to others, and available as a dietary supplement.
It is also produced when ultraviolet (UV) rays from sunlight strike the skin and trigger vitamin D production.
</Typography>

</div>
    )
}