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
Biotin, also known as vitaminB7, is a water-soluble vitamin that plays a vital role in assisting enzymes to break down fats, carbohydrates, and proteins in food.
</Typography>

</div>
    )
}