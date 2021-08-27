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

{/* Descroption */}
<Typography className={classes.paragraph} paragraph='true' variant='body1'>
Vitamin B2, or riboflavin, is one of eight B vitamins that are essential for human health.
It can be found in grains, plants, and dairy products.
It is crucial for breaking down food components, absorbing other nutrients, and maintaining tissues.
</Typography>

</div>
    )
}